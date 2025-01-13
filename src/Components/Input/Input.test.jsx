import Input from "./Input";
import { render, describe, it, expect } from "vitest";

describe("Input", () => {
  it("should render an input element", () => {
    const { getByPlaceholderText } = render(<Input />);
    const inputElement = getByPlaceholderText("Enter your password");
    expect(inputElement).toBeInTheDocument();
  });
});