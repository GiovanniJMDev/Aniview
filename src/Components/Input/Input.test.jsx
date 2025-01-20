import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Input from "./Input";
import "@testing-library/jest-dom";

test("debe renderizar el componente Input", () => {
  render(<Input placeholder="Enter text" />);

  const inputElement = screen.getByPlaceholderText("Enter text");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe("");
});

// Test 2: Verifica que el valor por defecto de `value` sea una cadena vacía
test("el valor predeterminado de value debe ser una cadena vacía", () => {
  render(<Input placeholder="Enter text" value="" />);

  const inputElement = screen.getByPlaceholderText("Enter text");
  expect(inputElement).toHaveAttribute("value", "");
});

// Test 3: Verifica que el `name` se asigna correctamente cuando se pasa como prop
test("el atributo name debe ser igual al prop name", () => {
  render(<Input name="Email" placeholder="Enter your email" />);

  const inputElement = screen.getByPlaceholderText("Enter your email");
  expect(inputElement).toHaveAttribute("name", "email");
});

// Test 4: Verifica que el error se muestra correctamente en el placeholder y el color de borde cambia
test("debe mostrar el error en el placeholder y cambiar el color del borde", () => {
  render(<Input placeholder="Enter text" error="Campo obligatorio" />);

  // Verifica que el placeholder muestre el error
  const inputElement = screen.getByPlaceholderText("Campo obligatorio");
  expect(inputElement).toHaveClass("border-red-500");

  // Verifica que el texto del error esté en rojo
  expect(inputElement).toHaveClass("text-red-500");
});

// Test 5: Verifica que el valor del input se actualiza correctamente cuando se cambia el valor de onChange
test("el valor del input se actualiza correctamente cuando se cambia el valor de onChange", () => {
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

// Test 6: Verifica que el valor del input es tipo password, texto o email según se especifique el tipo
test("el valor del input es tipo password, texto o email según se especifique el tipo", () => {
  // Prueba para tipo "password"
  render(<Input placeholder="Enter password" type="password" />);
  const inputElementPassword = screen.getByPlaceholderText("Enter password");
  expect(inputElementPassword).toHaveAttribute("type", "password");

  // Prueba para tipo "text"
  render(<Input placeholder="Enter text" type="text" />);
  const inputElementText = screen.getByPlaceholderText("Enter text");
  expect(inputElementText).toHaveAttribute("type", "text");

  // Prueba para tipo "email"
  render(<Input placeholder="Enter email" type="email" />);
  const inputElementEmail = screen.getByPlaceholderText("Enter email");
  expect(inputElementEmail).toHaveAttribute("type", "email");
});

test("el label tiene el nombre correctamente", () => {
  const name = "Email"; // Nombre que esperamos en el label
  render(<Input name={name} placeholder="Enter text" />);

  // Busca el label por su texto
  const labelElement = screen.getByText(name);

  // Verifica que el label esté en el documento
  expect(labelElement).toBeInTheDocument();
});
