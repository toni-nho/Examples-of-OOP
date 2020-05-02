/*
Objeto: Uma alocação na memoria de uma classe
*/

import Casa from "./Casa";

export default class Objeto {
  public Objeto() {
    const casa = new Casa();
    casa.QuantidadeAndares = 8;
    casa.TamanhoMetrosQuadradros = 100;
    casa.ValorTotal = 100_000_000;
  }
}
