import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn(),
}));

describe("AnimeCard testing routes, and render", () => {
  const mockAnime = {
    id: 1,
    title: "Naruto",
    description: "Naruto is a shinobi",
    image: "https://example.com/naruto.jpg",
  };

  beforeEach(() => {
    useNavigate.mockReset();
  });

  it("navigate to the anime page when the button is clicked", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith(`/anime/${mockAnime.id}`);
  });

  it(" navigate to the incorrect page when the button is clicked", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AnimeCard anime={mockAnime} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigate).not.toHaveBeenCalledWith(
      `/incorrect-route/${mockAnime.id}`
    );
  });

  it("render the title correctly", () => {
    render(<AnimeCard anime={mockAnime} />);

    const titleElement = screen.getByText(mockAnime.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("render the image correctly", () => {
    render(<AnimeCard anime={mockAnime} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockAnime.image);
    expect(image).toHaveAttribute("alt", mockAnime.title);
  });
});
