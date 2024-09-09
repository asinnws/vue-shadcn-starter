import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Textarea from '../Textarea.vue';

describe('Textarea.vue', () => {
  describe('Render', () => {
    it('should render textarea correctly', () => {
      const value = 'testvalue';
      const wrapper = mount(Textarea, {
        props: {
          modelValue: value
        }
      });

      const textarea = wrapper.find('textarea');

      expect(textarea.element.value).toBe(value);
    });

    it('should render disabled state correctly', () => {
      const wrapper = mount(Textarea, {
        props: {
          disabled: true
        }
      });

      const textarea = wrapper.find('textarea');

      expect(textarea.element.disabled).toBe(true);
    });
  });

  describe('Events', () => {
    it('handles focus and blur events', async () => {
      const wrapper = mount(Textarea);

      const textarea = wrapper.find('textarea');

      textarea.trigger('focus');
      expect(wrapper.emitted('focus')).toBeTruthy();

      textarea.trigger('blur');
      expect(wrapper.emitted('blur')).toBeTruthy();
    });

    it('updates the value on user textarea', async () => {
      const wrapper = mount(Textarea);
      const valueToChange = 'value to change';

      const textarea = wrapper.find('textarea');
      textarea.setValue(valueToChange);

      expect(textarea.element.value).toBe(valueToChange);
    });
  });
});
