import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Dilip/Card",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    title: "Dilip Valiya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea a fugiat nihil ab in quibusdam aperiam aliquid! Impedit itaque tempore, modi in porro libero quo voluptatem dolorum perferendis exercitationem illo a quisquam repellat quaerat ex aut? Rerum velit dolore corporis veritatis asperiores tenetur et laborum dignissimos facilis odit. Numquam itaque voluptatem dicta vel assumenda nulla culpa deserunt laborum fugiat, sint ab explicabo totam mollitia adipisci architecto eos atque dolorem aliquid nobis tempore quis suscipit eveniet repellendus! Voluptatum quam blanditiis vitae aliquam hic ipsum enim cupiditate illo necessitatibus, perspiciatis odio labore. Adipisci omnis iusto ut natus et impedit tempore ad.",
  },
};

export const CardWithoutTitle: Story = {
  args: {
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea a fugiat nihil ab in quibusdam aperiam aliquid! Impedit itaque tempore, modi in porro libero quo voluptatem dolorum perferendis exercitationem illo a quisquam repellat quaerat ex aut? Rerum velit dolore corporis veritatis asperiores tenetur et laborum dignissimos facilis odit. Numquam itaque voluptatem dicta vel assumenda nulla culpa deserunt laborum fugiat, sint ab explicabo totam mollitia adipisci architecto eos atque dolorem aliquid nobis tempore quis suscipit eveniet repellendus! Voluptatum quam blanditiis vitae aliquam hic ipsum enim cupiditate illo necessitatibus, perspiciatis odio labore. Adipisci omnis iusto ut natus et impedit tempore ad.",
  },
};

export const CardWithoutDescription: Story = {
  args: {
    title: "Dilip Valiya",
    description: "",
  },
};
