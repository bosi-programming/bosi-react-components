import type { Meta, StoryObj } from '@storybook/react';
import { BuyMeACoffee } from './BuyMeACoffee';

const meta = {
  title: 'Components/BuyMeACoffee',
  component: BuyMeACoffee,
} satisfies Meta<typeof BuyMeACoffee>;

export default meta;

type Story = StoryObj<typeof BuyMeACoffee>;

export const DefaultTypography: Story = {
  args: {
    linkText: (
      <>
        <span className="text-3xl">☕️ </span>buy me a coffee
      </>
    ),
    preText: 'If you like this app, consider supporting us on ',
  },
};
