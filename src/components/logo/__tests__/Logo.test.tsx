import { Logo } from "../Logo";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test suite for the Logo Component", () => {
  test("test weather the Logo was successfully mounted in the DOM", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });
});
