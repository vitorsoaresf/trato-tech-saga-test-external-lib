import buscaReducer, { mudarBusca, resetarBusca } from "./busca";

describe("Testando busca reducer", () => {
  test("Deve mudar busca como o esperado", () => {
    expect(buscaReducer("", mudarBusca("teste"))).toBe("teste");
  });

  test("Deve resetar busca como o esperado", () => {
    expect(buscaReducer("outro valor", resetarBusca())).toBe("");
  });
});
