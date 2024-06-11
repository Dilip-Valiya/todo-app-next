import { render, screen, waitFor } from "@testing-library/react";
import Greet, { getMessage } from "./page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Hello, World!" }),
  })
) as jest.Mock;

describe("getMessage", () => {
  it("should fetch the greet message", async () => {
    const message = await getMessage();
    expect(message).toBe("Hello, World!");
  });

  it("should handle fetch errors", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Fetch error"))
    );
    try {
      await getMessage();
    } catch (error) {
      expect(error).toEqual(new Error("Fetch error"));
    }
  });
});

describe("Greet component", () => {
  it("should render the greet message", async () => {
    render(await Greet());

    await waitFor(() =>
      expect(screen.getByText("Hello, World!")).toBeInTheDocument()
    );
  });
});
