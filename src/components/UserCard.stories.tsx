import type { Meta, StoryObj } from "@storybook/react";

import UserCard from "./UserCard";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    name: "Dilip Valiya",
    email: "dilipkvaliya@gmail.com",
  },
};
