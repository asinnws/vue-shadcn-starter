import { Search } from 'lucide-vue-next';
import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

// Meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon']
    },
    class: { control: 'text' }
  },
  args: {
    variant: 'default',
    size: 'default'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default variant
export const VariantDefault: Story = {
  args: {
    variant: 'default',
    size: 'default',
    default: 'Variant Default'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Destructive variant
export const VariantDestructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    default: 'Variant Destructive'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Outline variant
export const VariantOutline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    default: 'Variant Outline'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Secondary variant
export const VariantSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    default: 'Variant Secondary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Ghost variant
export const VariantGhost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    default: 'Variant Ghost'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Link variant
export const VariantLink: Story = {
  args: {
    variant: 'link',
    size: 'default',
    default: 'Variant Link'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Extra Small size
export const SizeExtraSmall: Story = {
  args: {
    variant: 'default',
    size: 'xs',
    default: 'Size Extra Small'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Small size
export const SizeSmall: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    default: 'Size Small'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Large size
export const SizeLarge: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    default: 'Size Large'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};

// Icon size
export const SizeIcon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    default: '<Search />'
  },
  render: (args) => ({
    components: { Button, Search },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`
  })
};
