import { CheckCheck } from 'lucide-vue-next';
import Checkbox from './Checkbox.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

// Meta configuration for the Checkbox component
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    class: { control: 'text' }
  },
  args: {
    checked: false,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Unchecked checkbox
export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`
  })
};

// Checked checkbox
export const Checked: Story = {
  args: {
    checked: true,
    disabled: false
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`
  })
};

// Disabled unchecked checkbox
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`
  })
};

// Disabled checked checkbox
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`
  })
};

// Custom Slot Content
export const CustomSlot: Story = {
  args: {
    checked: true,
    disabled: false,
    default: '<CheckCheck />'
  },
  render: (args) => ({
    components: { Checkbox, CheckCheck },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args">${args.default}</Checkbox>`
  })
};
