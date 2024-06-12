import type { Meta, StoryObj } from "@storybook/react";

import StyledButton from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    shape: {
      control: "select",
      options: ["square", "round"],
    },
  },
  args: { onClick: fn() },
  title: "Dilip/Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySquareButton: Story = {
  args: {
    variant: "primary",
    label: "Button",
    shape: "square",
  },
};

export const PrimaryRoundButton: Story = {
  args: {
    variant: "primary",
    label: "Button",
    shape: "round",
  },
};

export const SecondarySquareButton: Story = {
  args: {
    label: "Button",
    shape: "square",
  },
};

export const SecondaryRoundButton: Story = {
  args: {
    label: "Button",
  },
};
