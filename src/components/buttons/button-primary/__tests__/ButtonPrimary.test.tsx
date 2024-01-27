import { ButtonPrimary } from "../ButtonPrimary";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test suite for the Primary Button component", () => {
  test("The Primary Button successfully mounts on render", () => {
    render(<ButtonPrimary>Numbers</ButtonPrimary>);

    const primaryBtn = screen.getByTestId("primary-btn");

    expect(primaryBtn).toBeInTheDocument();
  });
});
