import { ButtonSecondary } from "../ButtonSecondary";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test suite for the secondary Button", () => {
  test("The Secondary Button is mounted on page render", () => {
    render(<ButtonSecondary>Icons</ButtonSecondary>);

    const secondaryBtn = screen.getByTestId("secondary-btn");

    expect(secondaryBtn).toBeInTheDocument();
  });
});
