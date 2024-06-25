import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Dilip/Select",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectComponent: Story = {};
