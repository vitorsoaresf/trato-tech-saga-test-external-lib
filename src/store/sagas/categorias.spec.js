import categoriasService from "services/categorias";
import { observarCategorias } from "./categorias";
import { call } from "redux-saga/effects";

describe("testando categorias saga", () => {
  describe("testando categorias saga", () => {
    test("Deve executar categoriaService.buscar", () => {
      const funcaoGeradora = observarCategorias();
      const funcaoEsperada = call(categoriasService.buscar);

      funcaoGeradora.next(); //executa o delay

      const funcaoExecutada = funcaoGeradora.next(); //executa o call(categoriasService.buscar);

      expect(funcaoExecutada.value).toEqual(funcaoEsperada);
    });
  });
});
