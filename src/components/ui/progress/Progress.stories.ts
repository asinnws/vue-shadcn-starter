import type { Meta, StoryObj } from '@storybook/vue3';
import Progress from './Progress.vue';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    class: { control: 'text' },
    modelValue: { control: 'range', name: 'Value' }
  },
  args: {
    max: 100,
    modelValue: 50
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    modelValue: 50,
    class: 'max-w-[480px] mt-2'
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: `<Progress v-bind="args" />`
  })
};
