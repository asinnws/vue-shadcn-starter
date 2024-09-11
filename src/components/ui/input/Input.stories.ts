import type { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';

// Meta configuration for the Input component
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    modelValue: { control: 'text', name: 'Value' },
    class: { control: 'text', name: 'Class' },
    placeholder: { control: 'text', name: 'Placeholder' },
    disabled: { control: 'boolean', name: 'Disabled' }
  },
  args: {
    placeholder: 'Enter text...',
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default input
export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Enter text...'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" />`
  })
};

// Input with default value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default value',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" />`
  })
};

// Input with placeholder
export const WithPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" />`
  })
};

// Disabled input
export const DisabledEmpty: Story = {
  args: {
    modelValue: '',
    placeholder: 'Placeholder - Cannot type here...',
    disabled: true
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" />`
  })
};

export const DisabledFilled: Story = {
  args: {
    modelValue: 'Cannot type here',
    placeholder: 'Placeholder - Cannot type here...',
    disabled: true
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" />`
  })
};

// Input with binding
export const TwoWayDataBinding: Story = {
  args: {
    modelValue: 'Two-way data binding',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" v-model="args.modelValue" />`
  })
};
