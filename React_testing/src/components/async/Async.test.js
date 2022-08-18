import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async component", () => {
  test("I have no idea", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "first test" }],
    });
    render(<Async />);

    const output = await screen.findAllByRole("listitem");
    expect(output).not.toHaveLength(0);
  });
});
