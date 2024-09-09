import { mount } from '@vue/test-utils';
import Checkbox from '../Checkbox.vue'; // Adjust the path as needed
import { describe, expect, it } from 'vitest';

describe('Checkbox.vue', () => {
  describe('Render', () => {
    it('forwards checked state correctly', () => {
      const wrapper = mount(Checkbox, {
        props: {
          checked: true
        }
      });

      expect(wrapper.props('checked')).toBe(true);
    });

    it('applies the correct classes based on props', async () => {
      const customClass = 'my-custom-class';

      const wrapper = mount(Checkbox, {
        props: {
          class: customClass
        }
      });

      expect(wrapper.find('[role="checkbox"]').classes()).toContain(customClass);
    });
  });

  describe('Change', () => {
    it('changes state correctly', async () => {
      const wrapper = mount(Checkbox);

      await wrapper.find('[role="checkbox"]').trigger('click');

      expect(wrapper.find('[role="checkbox"]').attributes('aria-checked')).toBe('true');
    });

    it('does not change its state when disabled', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          disabled: true
        }
      });

      await wrapper.find('[role="checkbox"]').trigger('click');
      expect(wrapper.find('[role="checkbox"]').attributes('aria-checked')).toBe('false');
    });
  });
});
