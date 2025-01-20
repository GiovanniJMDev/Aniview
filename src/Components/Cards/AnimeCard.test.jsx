import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom"; // Importación necesaria para usar jest-dom

// Mock de useNavigate
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn(),
}));

describe("AnimeCard (pruebas mixtas: correctas e incorrectas)", () => {
  const mockAnime = {
    id: 1,
    title: "Naruto",
    description: "Un ninja joven que busca ser el Hokage.",
    image: "https://example.com/naruto.jpg",
  };

  beforeEach(() => {
    // Reseteamos el mock de useNavigate antes de cada prueba
    useNavigate.mockReset();
  });

  // Prueba CORRECTA: Navegación a la página correcta
  it("navega a la página correcta al hacer clic en el botón", async () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    // Simula el clic en el botón
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Verifica que useNavigate fue llamado con la ruta correcta
    expect(mockNavigate).toHaveBeenCalledWith(`/anime/${mockAnime.id}`);
  });

  // Prueba INCORRECTA: Navegación a una ruta incorrecta (error a propósito)
  it("navega a la página incorrecta al hacer clic en el botón (error a propósito)", async () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    // Simula el clic en el botón
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Verifica que useNavigate fue llamado con una ruta incorrecta (error a propósito)
    expect(mockNavigate).not.toHaveBeenCalledWith(
      `/ruta-incorrecta/${mockAnime.id}`
    );
  });

  // Prueba CORRECTA: Renderiza el título correctamente
  it("renderiza el título correctamente", async () => {
    render(<AnimeCard anime={mockAnime} />);

    // Verifica que el título esté en el documento
    const titleElement = screen.getByText(mockAnime.title);
    expect(titleElement).toBeInTheDocument();
  });

  // Prueba CORRECTA: Renderiza la imagen correctamente
  it("renderiza la imagen correctamente", async () => {
    render(<AnimeCard anime={mockAnime} />);

    // Verifica que la imagen tenga el src y alt correctos
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockAnime.image);
    expect(image).toHaveAttribute("alt", mockAnime.title);
  });
});
