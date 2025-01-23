import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

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
    useNavigate.mockReset();
  });

  it("navega a la página correcta al hacer clic en el botón", async () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith(`/anime/${mockAnime.id}`);
  });

  it("navega a la página incorrecta al hacer clic en el botón (error a propósito)", async () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigate).not.toHaveBeenCalledWith(
      `/ruta-incorrecta/${mockAnime.id}`
    );
  });

  it("renderiza el título correctamente", async () => {
    render(<AnimeCard anime={mockAnime} />);

    const titleElement = screen.getByText(mockAnime.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renderiza la imagen correctamente", async () => {
    render(<AnimeCard anime={mockAnime} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockAnime.image);
    expect(image).toHaveAttribute("alt", mockAnime.title);
  });
});
