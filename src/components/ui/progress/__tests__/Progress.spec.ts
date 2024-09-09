import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Progress from '../Progress.vue';

describe('Progress.vue', () => {
  describe('Render', () => {
    it('should bind progress value correctly', () => {
      const value = 60;

      const wrapper = mount(Progress, {
        props: {
          modelValue: value
        }
      });

      const progress = wrapper.find('[role="progressbar"]');

      expect(progress.attributes('data-value')).toBe(String(value));
    });

    it('should render non-filled progress bar correctly', () => {
      const value = 1;

      const wrapper = mount(Progress, {
        props: {
          modelValue: value
        }
      });

      const progress = wrapper.find('[role="progressbar"]');

      expect(progress.attributes('data-state')).toBe('loading');
    });

    it('should render non-filled progress bar correctly', () => {
      const value = 100;

      const wrapper = mount(Progress, {
        props: {
          modelValue: value
        }
      });

      const progress = wrapper.find('[role="progressbar"]');

      expect(progress.attributes('data-state')).toBe('complete');
    });

    it('should render non-filled indicator bar correctly', () => {
      const value = 10;

      const wrapper = mount(Progress, {
        props: {
          modelValue: value
        }
      });

      const indicator = wrapper.findAll('[data-state="loading"]')[1];
      expect(indicator.attributes('data-value')).toBe(String(value));
      expect(indicator.attributes('style')).toBe(`transform: translateX(-${100 - value}%);`);
    });

    it('should render filled indicator correctly', () => {
      const value = 100;

      const wrapper = mount(Progress, {
        props: {
          modelValue: value
        }
      });

      const indicator = wrapper.findAll('[data-state="complete"]')[1];
      expect(indicator.attributes('data-value')).toBe(String(value));
      expect(indicator.attributes('style')).toBe(`transform: translateX(-0%);`);
    });
  });
});
