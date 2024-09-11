import type { Meta, StoryObj } from '@storybook/vue3';
import Textarea from './Textarea.vue';

// Meta configuration for the Textarea component
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
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
type Story = StoryObj<typeof Textarea>;

// Default textarea
export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Enter text...'
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};

// Textarea with default value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default value',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};

// Textarea with placeholder
export const WithPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};

// Disabled textarea
export const DisabledEmpty: Story = {
  args: {
    modelValue: '',
    placeholder: 'Placeholder - Cannot type here...',
    disabled: true
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};

export const DisabledFilled: Story = {
  args: {
    modelValue: 'Cannot type here',
    placeholder: 'Placeholder - Cannot type here...',
    disabled: true
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};

// Textarea with binding
export const TwoWayDataBinding: Story = {
  args: {
    modelValue: 'Two-way data binding',
    placeholder: 'Type to see changes...'
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" />`
  })
};
