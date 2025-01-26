import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, vi, describe } from "vitest";
import Input from "./Input";
import "@testing-library/jest-dom";

describe("Input", () => {
  
  it("must render the Input component", () => {
    render(<Input placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  it("the value prop should be an empty string by default", () => {
    render(<Input placeholder="Enter text" value="" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("value", "");
  });

  it("the name prop should be equal to the prop name", () => {
    render(<Input name="Email" placeholder="Enter your email" />);

    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toHaveAttribute("name", "email");
  });

  it("must show the error in the placeholder and change the border color", () => {
    render(<Input placeholder="Enter text" error="Field is required" />);

    const inputElement = screen.getByPlaceholderText("Field is required");
    expect(inputElement).toHaveClass("border-red-500");

    expect(inputElement).toHaveClass("text-red-500");
  });

  it(" the input value should be updated correctly when the value of onChange changes", () => {
    const onChange = vi.fn();
    render(<Input placeholder="Enter text" onChange={onChange} />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "New value",
        }),
      })
    );
  });

  it(" the input value is password when the type is password", () => {
    render(<Input placeholder="Enter password" type="password" />);
    const inputElementPassword = screen.getByPlaceholderText("Enter password");
    expect(inputElementPassword).toHaveAttribute("type", "password");
  });

  it(" the input value is text when the type is text", () => {
    render(<Input placeholder="Enter text" type="text" />);
    const inputElementText = screen.getByPlaceholderText("Enter text");
    expect(inputElementText).toHaveAttribute("type", "text");
  });

  it(" the input value is email when the type is email", () => {
    render(<Input placeholder="Enter email" type="email" />);
    const inputElementEmail = screen.getByPlaceholderText("Enter email");
    expect(inputElementEmail).toHaveAttribute("type", "email");
  });

  it(" the input value is text when the type is not specified", () => {
    render(<Input placeholder="Enter text" />);
    const inputElementEmail = screen.getByPlaceholderText("Enter text");
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });

  it("el label tiene el nombre correctamente", () => {
    const name = "Email";
    render(<Input name={name} placeholder="Enter text" />);

    const labelElement = screen.getByText(name);

    expect(labelElement).toBeInTheDocument();
  });
});


