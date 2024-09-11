import type { Meta, StoryObj } from '@storybook/vue3';
import Label from './Label.vue';
import { Input } from '../input';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    class: { control: 'text' }
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    default: 'label text'
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `<Label v-bind="args">${args.default}</Label>`
  })
};

export const WithControl: Story = {
  render: (args) => ({
    components: { Label, Input },
    setup() {
      return { args };
    },
    template: `<Label v-bind="args" for="control"><span>label for control</span><Input id="control"/></Label>`
  })
};
