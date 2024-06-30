import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { signIn } from "next-auth/react";
import Login from "@/app/(main)/login/page";

// Mock next-auth
jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("Login Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the login form", () => {
    render(<Login />);

    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
  });

  it("renders social login buttons", () => {
    render(<Login />);

    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
    expect(screen.getByText("Continue with Github")).toBeInTheDocument();
  });

  it("calls signIn when Google login button is clicked", async () => {
    render(<Login />);

    const googleButton = screen.getByText("Continue with Google");
    fireEvent.click(googleButton);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("google", {
        callbackUrl: "/workspace",
      });
    });
  });

  it("allows entering email and password", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("shows alert when Github login button is clicked", () => {
    render(<Login />);

    const githubButton = screen.getByText("Continue with Github");
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.click(githubButton);

    expect(alertMock).toHaveBeenCalledWith("Coming Soon!!");
    alertMock.mockRestore();
  });

  it("shows alert when Log in button is clicked", () => {
    render(<Login />);

    const loginButton = screen.getByRole("button", { name: "Log in" });
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.click(loginButton);

    expect(alertMock).toHaveBeenCalledWith("Coming Soon!!");
    alertMock.mockRestore();
  });
});
