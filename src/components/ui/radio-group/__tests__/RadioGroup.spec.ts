import { mount } from '@vue/test-utils';
import { RadioGroup, RadioGroupItem } from '../.';
import { describe, expect, it, beforeEach } from 'vitest';
import { Label } from '../../label';
import { h } from 'vue';

function createRadioIndicator(value: string, disabled = false) {
  return h(RadioGroupItem, { id: value, value, disabled });
}

function createRadioLabel(value: string) {
  return h(
    Label,
    { for: value },
    {
      default: () => h('span', {}, `label for ${value} radio control`)
    }
  );
}

function createRadioItems(options: Array<{ value: string; disabled?: boolean }>) {
  return options.map((o) => h('div', {}, [createRadioIndicator(o.value, !!o.disabled), createRadioLabel(o.value)]));
}

function randomizeNumber(num: number): number {
  return Math.floor(Math.random() * num);
}

describe('RadioGroup.vue', () => {
  let options: Array<{ value: string; disabled?: boolean }>;

  beforeEach(() => {
    options = [{ value: 'first' }, { value: 'second' }, { value: 'third' }];
  });

  describe('Render', () => {
    it('forwards checked state correctly', () => {
      const defaultValueIndex = randomizeNumber(options.length);
      const defaultValue = options[defaultValueIndex].value;

      const wrapper = mount(RadioGroup, {
        props: {
          defaultValue
        },
        slots: {
          default: createRadioItems(options)
        }
      });

      const radioOptions = wrapper.findAll('[role="radio"]');
      const selectedOption = radioOptions[defaultValueIndex];

      expect(selectedOption.attributes('aria-checked')).toBe('true');
    });

    it('forwards disabled state correctly', () => {
      const disabledOptionIndex = randomizeNumber(options.length);
      options[disabledOptionIndex].disabled = true;

      const wrapper = mount(RadioGroup, {
        slots: {
          default: createRadioItems(options)
        }
      });

      const radioOptions = wrapper.findAll('[role="radio"]');
      const selectedOption = radioOptions[disabledOptionIndex];

      expect(selectedOption.attributes('disabled')).toBe('');
    });
  });

  describe('Change', () => {
    it('changes state correctly', async () => {
      const wrapper = mount(RadioGroup, {
        slots: {
          default: createRadioItems(options)
        }
      });

      const optionIndex = randomizeNumber(options.length);

      const option = wrapper.findAll('[role="radio"]')[optionIndex];
      await option.trigger('click');

      expect(option.attributes('aria-checked')).toBe('true');
    });

    it('changes state by clicking on its label', async () => {
      const wrapper = mount(RadioGroup, {
        slots: {
          default: createRadioItems(options)
        }
      });

      const labelIndex = randomizeNumber(options.length);

      const label = wrapper.findAll('label')[labelIndex];
      const radioOption = wrapper.findAll('[role="radio"]')[labelIndex];

      await label.trigger('click');

      const checkedStateAfterClick = radioOption.attributes('aria-checked');

      expect(checkedStateAfterClick).toBe('true');
    });

    it('does not change its state when disabled', async () => {
      const disabledOptionIndex = randomizeNumber(options.length);
      options[disabledOptionIndex].disabled = true;

      const wrapper = mount(RadioGroup, {
        slots: {
          default: createRadioItems(options)
        }
      });

      const radioOption = wrapper.findAll('[role="radio"]')[disabledOptionIndex];
      const radioLabel = wrapper.findAll('label')[disabledOptionIndex];

      const checkedStateBeforeClick = radioOption.attributes('aria-checked');

      await radioLabel.trigger('click');

      const checkedStateAfterClick = radioOption.attributes('aria-checked');

      expect(checkedStateBeforeClick).toBe(checkedStateAfterClick);
    });
  });
});
