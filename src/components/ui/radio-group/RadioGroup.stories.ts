import type { Meta, StoryObj } from '@storybook/vue3';
import RadioGroup from './RadioGroup.vue';
import RadioGroupItem from './RadioGroupItem.vue';

// TODO: get rid of ts-ignore

// Meta configuration for the RadioGroup component
const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    // @ts-ignore
    value: { control: 'text', name: 'Selected Value', description: 'The selected radio value' },
    defaultValue: { control: 'text', name: 'Default Value', description: 'The default selected radio value' },
    class: { control: 'text', name: 'Class', description: 'Custom CSS classes for styling' },
    disabled: { control: 'boolean', name: 'Disabled', description: 'Disables the radio group when true' },
    name: { control: 'text', name: 'Name', description: 'The name attribute for radio buttons' }
  },
  args: {
    // @ts-ignore
    value: undefined,
    defaultValue: '',
    class: '',
    disabled: false,
    name: 'radio-group'
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Default radio group
export const Default: Story = {
  args: {
    // @ts-ignore
    value: undefined,
    defaultValue: '',
    class: '',
    disabled: false,
    name: 'radio-group-default'
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args };
    },
    template: `
        <RadioGroup v-bind="args">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      `
  })
};

// Radio group with a default value
export const WithDefaultValue: Story = {
  args: {
    // @ts-ignore
    value: undefined,
    defaultValue: 'option2', // Set default value
    class: '',
    disabled: false,
    name: 'radio-group-default-value'
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args };
    },
    template: `
        <RadioGroup v-bind="args">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      `
  })
};

// Disabled radio group option
export const WithDisabledOption: Story = {
  args: {
    // @ts-ignore
    value: '',
    defaultValue: '',
    class: '',
    name: 'radio-group-disabled-option'
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args };
    },
    template: `
          <RadioGroup v-bind="args">
            <RadioGroupItem value="option1" disabled />
            <RadioGroupItem value="option2" />
            <RadioGroupItem value="option3" />
          </RadioGroup>
        `
  })
};

// Disabled radio group
export const FullyDisabled: Story = {
  args: {
    // @ts-ignore
    value: undefined,
    defaultValue: '',
    class: '',
    disabled: true, // Set disabled to true
    name: 'radio-group-disabled'
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args };
    },
    template: `
        <RadioGroup v-bind="args">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      `
  })
};

// Custom styles for radio group
export const CustomStyles: Story = {
  args: {
    // @ts-ignore
    value: undefined,
    defaultValue: '',
    class: 'p-4 border border-primary', // Custom styles
    disabled: false,
    name: 'radio-group-custom-styles'
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args };
    },
    template: `
        <RadioGroup v-bind="args">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      `
  })
};
