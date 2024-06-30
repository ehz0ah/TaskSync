import { render, screen } from "@testing-library/react";
import Alert from "@/app/(platform)/_parts/alert";

describe("Alert", () => {
  test("renders the alert message", () => {
    render(<Alert message="Test message" />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

});
