import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders the heading ", () => {
    render(<Greeting />);

    const headerElement = screen.getByText("Greeting page");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the initial state", () => {
    render(<Greeting />);

    const output = screen.getByText("OFF");
    expect(output).toBeInTheDocument();
  });

  test("renders the state after the button has been clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const output = screen.getByText("ON");
    expect(output).toBeInTheDocument();
  });

  test("tests the button functionality", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");

    userEvent.click(button);

    const output = screen.queryByText("OFF");
    expect(output).toBeNull;
  });
});
