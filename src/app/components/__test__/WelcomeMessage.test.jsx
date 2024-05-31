import { render, screen } from "@testing-library/react";
import WelcomeMessage from "../WelcomeMessage";

describe("WelcomeMessage", () => {
  it("should render correctly", () => {
    render(<WelcomeMessage message="message" />);
    const messageElement = screen.getByText("message");
    expect(messageElement).toBeInTheDocument();
  });
});
