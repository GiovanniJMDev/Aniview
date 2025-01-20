import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { MemoryRouter, useNavigate } from "react-router-dom"; // Para simular la navegación
import NavbarButton from "./NavbarButton"; // Asegúrate de que la ruta sea correcta
import "@testing-library/jest-dom";

const MockIcon = "icons.myListIcon";

// Mock de useNavigate
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal(); // Importa el módulo original
  return {
    ...actual, // Mantén todas las exportaciones originales
    useNavigate: vi.fn(), // Mock de useNavigate
  };
});

describe("NavbarButton", () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = vi.fn();
    useNavigate.mockImplementation(() => navigateMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza correctamente con título y ícono", () => {
    render(
      <MemoryRouter>
        <NavbarButton title="Home" IconComponent={MockIcon} isExpanded={true} />
      </MemoryRouter>
    );

    const textButton = screen.getByText("Home");
    expect(textButton).toBeInTheDocument();

    const icon = screen.getByTestId("navbar-icon");
    expect(icon).toBeInTheDocument();
  });

  it("navega a la ruta correcta al hacer clic", () => {
    render(
      <MemoryRouter>
        <NavbarButton title="Inicio" IconComponent={MockIcon} to="/inicio" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(navigateMock).toHaveBeenCalledWith("/inicio");
  });

  it("llama a onClick si está definido", () => {
    const onClickMock = vi.fn();
    render(
      <MemoryRouter>
        <NavbarButton
          title="Inicio"
          IconComponent={MockIcon}
          onClick={onClickMock}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(onClickMock).toHaveBeenCalled();
  });

  it("aplica las clases correctas cuando isActive es true", () => {
    render(
      <MemoryRouter>
        <NavbarButton title="Inicio" IconComponent={MockIcon} isActive={true} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-white", "border-white", "text-onix");
  });

  it("oculta el título cuando isExpanded es false", () => {
    render(
      <MemoryRouter>
        <NavbarButton
          title="Inicio"
          IconComponent={MockIcon}
          isExpanded={false}
        />
      </MemoryRouter>
    );

    const title = screen.getByText("Inicio");
    expect(title).toHaveClass("w-0");
  });
});
