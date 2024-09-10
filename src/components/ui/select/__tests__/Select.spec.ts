import { mount } from '@vue/test-utils';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../.';
import { beforeEach, describe, expect, it } from 'vitest';
import { h, nextTick } from 'vue';

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
    it('should render select with placeholder if there is no value provided', () => {
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

    it('should render a list of options when select is opened', async () => {
      const wrapper = mount(Select, {
        slots: {
          default: createSelectContent(options)
        }
      });

      const selectTrigger = wrapper.find('[role="combobox"]');

      await selectTrigger.trigger('click');

      const dropdownOptions = wrapper.findAll('option');

      expect(dropdownOptions.length).toBe(options.length);

      dropdownOptions.forEach((option, index) => {
        expect(option.element.value).toBe(options[index].value);
      });
    });

    it('should render a list of options included disabled ones when select is opened', async () => {
      options.push({ value: 'abc', disabled: true });

      const wrapper = mount(Select, {
        slots: {
          default: createSelectContent(options)
        }
      });

      const selectTrigger = wrapper.find('[role="combobox"]');

      await selectTrigger.trigger('click');

      const disabledOption = wrapper.findAll('option').at(-1)!;

      expect(disabledOption.element.disabled).toBe(true);
    });
  });
});
