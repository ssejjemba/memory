import { ButtonSecondary } from "../button-secondary/ButtonSecondary";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("test suite for the ButtonSecondary Component in the Document", () => {
  test("test weather the ButtonSecondary has been successfully rendered in the document", () => {
    render(<ButtonSecondary>New Game</ButtonSecondary>);
    const buttonSecondary = screen.getByTestId("secondary-btn");

    expect(buttonSecondary).toBeInTheDocument();
  });
});
