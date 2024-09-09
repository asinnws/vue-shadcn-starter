import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Label from '../Label.vue';

describe('Label.vue', () => {
  describe('Render', () => {
    it('should render inner content correctly', () => {
      const labelText = 'Label Text';
      const wrapper = mount(Label, {
        slots: {
          default: `<span>${labelText}</span><input type="text"/>`
        }
      });

      expect(wrapper.text()).toBe(labelText);
      expect(wrapper.find('input')).toBeDefined();
    });
  });
});
