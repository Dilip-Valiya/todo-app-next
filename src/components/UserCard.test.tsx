import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("<UserCard />", () => {
  test("verify test", () => {
    render(<UserCard name="Dilip" email="dilip@gmail.com" />);
    expect(screen.getByText("Dilip")).toBeInTheDocument();
  });
});
