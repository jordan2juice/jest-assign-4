import { screen, render, fireEvent } from "@testing-library/react";
import ToggleText from "../ToggleText";

describe("Toggle Text", () => {
  test("does not show the text", () => {
    render(<ToggleText text={"text"} />);
    const textElement = screen.queryByText("text");
    expect(textElement).not.toBeInTheDocument();
  });

  test("shows the text", () => {
    render(<ToggleText text={"text"} />);
    const button = screen.getByText("Toggle");
    fireEvent.click(button);
    const textElement = screen.queryByText("text");
    expect(textElement).toBeInTheDocument();
  });
});
