import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '../Input.vue';

describe('Input.vue', () => {
  describe('Render', () => {
    it('should render input correctly', () => {
      const value = 'testvalue';
      const wrapper = mount(Input, {
        props: {
          modelValue: value
        }
      });

      const input = wrapper.find('input');

      expect(input.element.value).toBe(value);
    });

    it('should render disabled state correctly', () => {
      const wrapper = mount(Input, {
        props: {
          disabled: true
        }
      });

      const input = wrapper.find('input');

      expect(input.element.disabled).toBe(true);
    });
  });

  describe('Events', () => {
    it('handles focus and blur events', async () => {
      const wrapper = mount(Input);

      const input = wrapper.find('input');

      input.trigger('focus');
      expect(wrapper.emitted('focus')).toBeTruthy();

      input.trigger('blur');
      expect(wrapper.emitted('blur')).toBeTruthy();
    });

    it('updates the value on user input', async () => {
      const wrapper = mount(Input);
      const valueToChange = 'value to change';

      const input = wrapper.find('input');
      input.setValue(valueToChange);

      expect(input.element.value).toBe(valueToChange);
    });
  });
});
