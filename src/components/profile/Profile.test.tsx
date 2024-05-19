import { render, screen, waitFor } from "@testing-library/react";
import Profile from "./Profile";
import { UserProvider } from "../userContext/UserContext";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios", () => {
  return {
    ...jest.requireActual("axios"),
    get: jest.fn(),
  };
});

describe("<Profile />", () => {
  beforeAll(() => {
    localStorage.setItem("token", JSON.stringify("teste123"));
    //@ts-ignore
    axios.get.mockResolvedValue({
      data: {
        name: "Cliente",
        email: "cliente@email.com",
        avatar: null,
      },
    });
  });
  it("renders correctly", async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <Profile />
        </UserProvider>
      </BrowserRouter>
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getByRole("main")).toBeVisible();
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "../../assets/Profile.png"
    );
    expect(screen.getByText("Cliente")).toBeVisible();
    expect(screen.getByText("cliente@email.com")).toBeVisible();
  });
  it("renders correctly with avatar", async () => {
    //@ts-ignore
    axios.get.mockResolvedValue({
      data: {
        name: "Cliente",
        email: "cliente@email.com",
        avatar: {
          high: "https://recebeuimagem.com/1",
        },
      },
    });
    render(
      <BrowserRouter>
        <UserProvider>
          <Profile />
        </UserProvider>
      </BrowserRouter>
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://recebeuimagem.com/1"
    );
  });
});
