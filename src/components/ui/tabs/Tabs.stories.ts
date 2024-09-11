import type { Meta, StoryObj } from '@storybook/vue3';
import { Tabs, TabsTrigger, TabsList, TabsContent } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'], name: 'Orientation' },
    modelValue: { control: 'select', options: ['first', 'second'], name: 'Current' },
    class: { control: 'text' }
  },
  args: {
    orientation: 'horizontal'
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const OrientationHorizonal: Story = {
  args: {
    orientation: 'horizontal',
    modelValue: 'first'
  },
  render: (args) => ({
    components: { Tabs, TabsTrigger, TabsContent, TabsList },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" v-model="args.modelValue">
        <TabsList>
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">First tab content</TabsContent>
        <TabsContent value="second">Second tab content</TabsContent>
      </Tabs>`
  })
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical',
    modelValue: 'first'
  },
  render: (args) => ({
    components: { Tabs, TabsTrigger, TabsContent, TabsList },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" v-model="args.modelValue">
        <TabsList class="grid max-w-fit grid-cols-1">
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">First tab content</TabsContent>
        <TabsContent value="second">Second tab content</TabsContent>
      </Tabs>`
  })
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'second'
  },
  render: (args) => ({
    components: { Tabs, TabsTrigger, TabsContent, TabsList },
    setup() {
      return { args };
    },
    template: `
        <Tabs v-bind="args">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
          </TabsList>
          <TabsContent value="first">First tab content</TabsContent>
          <TabsContent value="second">Second tab content</TabsContent>
        </Tabs>`
  })
};
