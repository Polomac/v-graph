import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    primary: false,
    rounded: false,
    withIcon: false,
    label: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithIcon: Story = {
  args: {
    withIcon: true
  }
}
