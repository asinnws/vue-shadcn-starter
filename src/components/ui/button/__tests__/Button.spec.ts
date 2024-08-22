import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button, buttonVariants, type ButtonVariants } from '@/components/ui/button';

describe('Button.vue', () => {
  describe('Render', () => {
    it('renders a button with default variants correctly', () => {
      const wrapper = mount(Button);

      const defaultClasses = buttonVariants().split(' ');

      defaultClasses.forEach((cls) => {
        expect(wrapper.classes()).toContain(cls);
      });
    });

    it('renders the button with custom variant and size', () => {
      const adjustedProps: Partial<ButtonVariants> = {
        variant: 'destructive',
        size: 'lg'
      };
      const wrapper = mount(Button, {
        props: adjustedProps
      });

      const customClasses = buttonVariants(adjustedProps).split(' ');

      customClasses.forEach((cls) => {
        expect(wrapper.classes()).toContain(cls);
      });
    });

    it('applies custom class passed through props', () => {
      const customClass = 'my-custom-class';
      const wrapper = mount(Button, {
        props: {
          class: customClass
        }
      });

      expect(wrapper.classes()).toContain(customClass);
    });

    it('renders the correct tag when "as" prop is provided', () => {
      const tag = 'a';
      const wrapper = mount(Button, {
        props: {
          as: tag
        }
      });

      expect(wrapper.element.tagName).toBe(tag.toUpperCase());
    });

    it('renders the slot content', () => {
      const slotContent = 'Click Me';
      const wrapper = mount(Button, {
        slots: {
          default: slotContent
        }
      });

      expect(wrapper.text()).toBe(slotContent);
    });

    it('has the disabled attribute when the button is disabled', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true
        }
      });

      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('Events', () => {
    it('focuses using Tab key', async () => {
      const wrapper = mount(Button, {
        attachTo: document.body
      });

      await wrapper.element.focus();
      expect(wrapper.element).toBe(document.activeElement);
    });

    it('emits a click event when clicked', async () => {
      const onClick = vi.fn();
      const wrapper = mount(Button, {
        props: {
          onClick
        }
      });

      await wrapper.trigger('click');

      expect(wrapper.emitted('click')).toBeDefined();
      expect(onClick).toHaveBeenCalled();
    });

    it('does not emit a click event when the button is disabled', async () => {
      const onClick = vi.fn();
      const wrapper = mount(Button, {
        props: {
          disabled: true,
          onClick
        }
      });

      await wrapper.trigger('click');

      expect(wrapper.emitted('click')).toBeUndefined();
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
