import { mount } from '@vue/test-utils';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../.';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { h, nextTick } from 'vue';
import { waitFor } from '@storybook/test';

function createSelectContent(options: Array<{ value: string; disabled?: boolean }>, placeholder = 'choose an option') {
  return [
    h(SelectTrigger, {}, () => [h(SelectValue, { placeholder })]),
    h(SelectContent, {}, () =>
      options.map((o) => h(SelectItem, { value: o.value, disabled: !!o.disabled }, { default: () => o.value }))
    )
  ];
}

describe('Select.vue', () => {
  let options: Array<{ value: string; disabled?: boolean }>;

  beforeEach(() => {
    options = [{ value: 'first' }, { value: 'second' }];
  });

  describe('Render', () => {
    describe('Closed State', () => {
      it('should render the placeholder if there is no value provided', () => {
        const placeholder = 'choose an option';

        const wrapper = mount(Select, {
          slots: {
            default: createSelectContent(options, placeholder)
          }
        });
        const selectTrigger = wrapper.find('[role="combobox"]');

        expect(selectTrigger.text()).toBe(placeholder);
      });

      it('should render passed option if value is provided', async () => {
        const placeholder = 'choose an option';
        const defaultValue = options[0].value;

        const wrapper = mount(Select, {
          props: { defaultValue },
          slots: {
            default: createSelectContent(options, placeholder)
          }
        });

        const selectTrigger = wrapper.find('[role="combobox"]');
        await nextTick();

        expect(selectTrigger.text()).toBe(defaultValue);
      });
    });

    describe('Opened State', () => {
      it('should expand a select when click on the trigger', async () => {
        const wrapper = mount(Select, {
          slots: {
            default: createSelectContent(options)
          },
          attachTo: document.body
        });

        const selectTrigger = wrapper.find('[role="combobox"]');

        await selectTrigger.trigger('pointerdown');

        await vi.waitFor(() => {
          expect(selectTrigger.attributes('aria-expanded')).toBe('true');
        });
      });

      it('should render a list of unselected options when select is opened and value is not provided', async () => {
        const wrapper = mount(Select, {
          slots: {
            default: createSelectContent(options)
          },
          attachTo: document.body
        });

        const selectTrigger = wrapper.find('[role="combobox"]');

        await selectTrigger.trigger('pointerdown');

        await vi.waitFor(() => {
          expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
        });

        const selectOptions = wrapper.findAll('[role="option"]');

        expect(selectOptions.length).toBe(options.length);

        selectOptions.forEach((option, index) => {
          expect(option.attributes('aria-selected')).toBe('false');
          expect(option.attributes('data-value')).toBe(options[index].value);
        });

        wrapper.unmount();
      });

      it('should mark an option as selected if value is provided', async () => {
        const selectOptionIndex = 0;
        const optionToSelect = options[selectOptionIndex];

        const wrapper = mount(Select, {
          props: {
            defaultValue: optionToSelect.value
          },
          slots: {
            default: createSelectContent(options)
          },
          attachTo: document.body
        });

        const selectTrigger = wrapper.find('[role="combobox"]');

        await selectTrigger.trigger('pointerdown');

        await vi.waitFor(() => {
          expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
        });

        const renderedSelectOptions = wrapper.findAll('[role="option"]');

        const option = renderedSelectOptions[selectOptionIndex];

        expect(option.attributes('aria-selected')).toBe('true');
        expect(option.attributes('data-value')).toBe(optionToSelect.value);

        wrapper.unmount();
      });

      it('should render a list of options included disabled ones when select is opened', async () => {
        options.push({ value: 'abc', disabled: true });

        const wrapper = mount(Select, {
          slots: {
            default: createSelectContent(options)
          },
          attachTo: document.body
        });

        const selectTrigger = wrapper.find('[role="combobox"]');

        await selectTrigger.trigger('pointerdown');

        await vi.waitFor(() => {
          expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
        });

        const renderedSelectOptions = wrapper.findAll('[role="option"]');

        expect(options.length).toBe(renderedSelectOptions.length);

        const disabledOption = renderedSelectOptions[options.length - 1];

        expect(disabledOption.attributes('aria-disabled')).toBe(String(!!options[options.length - 1].disabled));
        expect(disabledOption.attributes('data-value')).toBe(options[options.length - 1].value);

        wrapper.unmount();
      });
    });
  });

  describe('Change', () => {
    it('should change select value when clicking on an option', async () => {
      const wrapper = mount(Select, {
        slots: {
          default: createSelectContent(options)
        },
        attachTo: document.body
      });

      const selectTrigger = wrapper.find('[role="combobox"]');

      await selectTrigger.trigger('pointerdown');

      await vi.waitFor(() => {
        expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
      });

      const optionIndex = 0;

      const selectOptions = wrapper.findAll('[role="option"]');

      const optionToSelect = selectOptions[optionIndex];

      optionToSelect.element.dispatchEvent(new PointerEvent('pointerup'));

      await waitFor(() => {
        expect(selectTrigger.text()).toBe(optionToSelect.text());
      });

      wrapper.unmount();
    });

    it('should mark select option as selected when clicking on an option', async () => {
      const wrapper = mount(Select, {
        slots: {
          default: createSelectContent(options)
        },
        attachTo: document.body
      });

      const selectTrigger = wrapper.find('[role="combobox"]');

      await selectTrigger.trigger('pointerdown');

      await vi.waitFor(() => {
        expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
      });

      const optionIndex = 0;

      wrapper.findAll('[role="option"]');

      const optionToSelect = wrapper.findAll('[role="option"]')[optionIndex];

      optionToSelect.element.dispatchEvent(new PointerEvent('pointerup'));

      await waitFor(() => {
        expect(selectTrigger.text()).toBe(optionToSelect.text());
      });

      await selectTrigger.trigger('pointerdown');

      await vi.waitFor(() => {
        expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
      });

      const selectedOption = wrapper.findAll('[role="option"]')[optionIndex];

      expect(selectedOption.attributes('aria-selected')).toBe('true');

      wrapper.unmount();
    });

    it('should not select disabled option', async () => {
      options.push({ value: 'abc', disabled: true });
      const wrapper = mount(Select, {
        slots: {
          default: createSelectContent(options)
        },
        attachTo: document.body
      });

      const selectTrigger = wrapper.find('[role="combobox"]');

      await selectTrigger.trigger('pointerdown');

      await vi.waitFor(() => {
        expect(wrapper.find('[role="listbox"]').isVisible()).toBe(true);
      });

      const disabledOptionToSelectIndex = options.length - 1;

      const disabledOption = wrapper.findAll('[role="option"]')[disabledOptionToSelectIndex];

      disabledOption.element.dispatchEvent(new PointerEvent('pointerup'));

      await vi.waitFor(() => {}, { timeout: 100 });

      expect(disabledOption.isVisible()).toBe(true);
      expect(disabledOption.attributes('aria-selected')).toBe('false');

      wrapper.unmount();
    });
  });
});
