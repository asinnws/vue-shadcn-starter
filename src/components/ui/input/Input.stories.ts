import type { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';

// TODO: get rid of ts-ignore

// Meta configuration for the Input component
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    modelValue: { control: 'text', name: 'Value' },
    class: { control: 'text', name: 'Class' },
    // @ts-ignore
    placeholder: { control: 'text', name: 'Placeholder' },
    disabled: { control: 'boolean', name: 'Disabled' }
  },
  args: {
    modelValue: '',
    // @ts-ignore
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
    defaultValue: '',
    // @ts-ignore
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

// Input with placeholder
export const WithPlaceholder: Story = {
  args: {
    modelValue: '',
    defaultValue: '',
    // @ts-ignore
    placeholder: 'Type something here...'
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
export const Disabled: Story = {
  args: {
    modelValue: '',
    defaultValue: '',
    // @ts-ignore
    placeholder: 'Cannot type here...',
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
    modelValue: 'Two-way binding example',
    // @ts-ignore
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
