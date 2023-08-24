import { render, screen } from "test-utils";
import Home from ".";
import userEvent from "@testing-library/user-event";

jest.mock("services/categorias");
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  // quero tudo que esta na lib do react-router-dom, substituindo apenas o useNavigate
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Testando Home page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("deve renderizar com categorias", async () => {
    render(<Home />);
    const categorias = await screen.findAllByTestId("home-categorias");

    expect(categorias).toHaveLength(2);
  });

  it("deve ao clicar no botao 'quero anunciar' redirecionar para a rota anuncie", async () => {
    render(<Home />);

    const bt = screen.getByText("Quero anunciar");

    userEvent.click(bt);

    expect(mockNavigate).toHaveBeenCalledWith("/anuncie");
  });
});
