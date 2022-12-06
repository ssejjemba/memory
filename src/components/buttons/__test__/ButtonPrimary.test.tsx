import { ButtonPrimary } from "../button-primary/ButtonPrimary";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("test cases for the ButtonPrimary Component in the UI", () => {
  test("test weather the ButtonPrimary has been successfully rendered in the document", () => {
    render(<ButtonPrimary>Restart</ButtonPrimary>);
    const buttonPrimary = screen.getByTestId("primary-btn");

    expect(buttonPrimary).toBeInTheDocument();
  });
});
