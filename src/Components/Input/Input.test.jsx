import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest"; // Importa desde vitest
import Input from "./Input"; // Asegúrate de que la ruta sea correcta
import "@testing-library/jest-dom"; // Importa jest-dom para poder usar toBeInTheDocument

test("debe renderizar el componente Input", () => {
  render(<Input placeholder="Enter text" />);

  const inputElement = screen.getByPlaceholderText("Enter text");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe(""); // Verifica que el campo esté vacío
});

// Test 2: Verifica que el valor por defecto de `name` sea una cadena vacía
test("el valor predeterminado de name debe ser una cadena vacía", () => {
  render(<Input placeholder="Enter text" />);

  const inputElement = screen.getByPlaceholderText("Enter text");
  expect(inputElement).toHaveAttribute("name", "");
});

// Test 3: Verifica que el `name` se asigna correctamente cuando se pasa como prop
test("el atributo name debe ser igual al prop name", () => {
  render(<Input name="Email" placeholder="Enter your email" />);

  const inputElement = screen.getByPlaceholderText("Enter your email");
  expect(inputElement).toHaveAttribute("name", "email"); // El nombre debe ser convertido a minúsculas y reemplazar espacios por guiones bajos
});

// Test 4: Verifica que el error se muestra correctamente en el placeholder y el color de borde cambia
test("debe mostrar el error en el placeholder y cambiar el color del borde", () => {
  render(<Input placeholder="Enter text" error="Campo obligatorio" />);

  // Verifica que el placeholder muestre el error
  const inputElement = screen.getByPlaceholderText("Campo obligatorio");
  expect(inputElement).toHaveClass("border-red-500"); // Verifica que el borde tenga el color de error

  // Verifica que el texto del error esté en rojo
  expect(inputElement).toHaveClass("text-red-500");
});

// Test 5: Verifica que el comportamiento de `onChange` funcione correctamente
test("debe llamar a la función onChange cuando el valor cambia", () => {
  const mockOnChange = vi.fn(); // Usamos `vi.fn()` con Vitest
  const value = ""; // Valor inicial vacío

  render(
    <Input
      placeholder="Enter text"
      onChange={mockOnChange}
      value={value}
      error={null} // Sin error
    />
  );

  const inputElement = screen.getByPlaceholderText("Enter text");

  // Simula un cambio en el valor del input
  fireEvent.change(inputElement, { target: { value: "New value" } });

  // Verifica que la función onChange haya sido llamada
  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({
        value: "New value", // Verifica solo el valor dentro del target
      }),
    })
  );

  // Verifica que el valor del input se haya actualizado correctamente
  expect(inputElement.value).toBe("New value");
});

// Test 6: Verifica que el input de tipo `password` tenga el atributo `autoComplete` configurado correctamente
test('debe configurar el atributo autoComplete como "current-password" para tipo "password"', () => {
  render(<Input type="password" placeholder="Enter password" />);

  const inputElement = screen.getByPlaceholderText("Enter password");
  expect(inputElement).toHaveAttribute("autoComplete", "current-password");
});

// Test 7: Verifica que el input de tipo `email` tenga el atributo `autoComplete` configurado correctamente
test('debe configurar el atributo autoComplete como "email" para tipo "email"', () => {
  render(<Input type="email" placeholder="Enter email" />);

  const inputElement = screen.getByPlaceholderText("Enter email");
  expect(inputElement).toHaveAttribute("autoComplete", "email");
});

// Test 8: Verifica que el color del texto y del placeholder cambien cuando haya un error
test("debe cambiar el color del texto y del placeholder cuando hay un error", () => {
  render(
    <Input placeholder="Enter your name" error="This field is required" />
  );

  const inputElement = screen.getByPlaceholderText("This field is required");

  // Verifica que el color del texto sea rojo cuando hay un error
  expect(inputElement).toHaveClass("text-red-500");
  // Verifica que el color del placeholder también sea rojo
  expect(inputElement).toHaveClass("placeholder:text-red-500");
});
