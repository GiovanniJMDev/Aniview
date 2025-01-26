import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { MemoryRouter, useNavigate } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import "@testing-library/jest-dom";

const MockIcon = "icons.myListIcon";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
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

  it("renders correctly with title and icon", () => {
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

  it("navigates to the correct route when clicked", () => {
    render(
      <MemoryRouter>
        <NavbarButton title="Inicio" IconComponent={MockIcon} to="/inicio" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(navigateMock).toHaveBeenCalledWith("/inicio");
  });

  it("calls onClick if it is defined", () => {
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

  it("applies the correct classes when isActive is true", () => {
    render(
      <MemoryRouter>
        <NavbarButton title="Inicio" IconComponent={MockIcon} isActive={true} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("navbar-button-active");
  });

  it("hidden the text when isExpanded is false", () => {
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
    expect(title).toHaveClass("navbar-button__text-not-expanded");
  });
});
