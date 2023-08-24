import { render, screen } from "test-utils";
import Home from ".";
import userEvent from "@testing-library/user-event";
import mockCategorias from "mocks/categorias";

jest.mock("services/categorias");

//jest.fn() => Essa função é bem comum do Jest, e é utilizada para que a gente consiga ter uma referência de alguma função para testarmos se ela foi executada uma ou várias vezes e qual argumento foi passada para ela.
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  // jest utiliza para obter todos os módulos de um pacote
  // consegue importar todos os módulos de um pacote para que possamos mockar apenas as partes que queremos testar.
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

  it("deve redirecionar para a page com o id da categoria", async () => {
    render(<Home />);
    const categorias = await screen.findAllByTestId("home-categorias");
    const primeiraCategoria = categorias[0];

    userEvent.click(primeiraCategoria);

    expect(mockNavigate).toHaveBeenCalledWith(
      `/categoria/${mockCategorias[0].id}`
    );
  });

  it("deve ao clicar no botao 'quero anunciar' redirecionar para a rota anuncie", async () => {
    render(<Home />);

    const bt = screen.getByText("Quero anunciar");

    userEvent.click(bt);

    expect(mockNavigate).toHaveBeenCalledWith("/anuncie");
  });
});
