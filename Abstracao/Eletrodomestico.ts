export abstract class Eletrodomestico {
  private readonly _nome: string;
  private readonly _voltagem: number;

  constructor(nome: string, voltagem: number) {
    this._nome = nome;
    this._voltagem = voltagem;
  }

  public abstract Ligar(): void;
  public abstract Desligar(): void;
  public testar(): void {
    console.log("Testando Eletrodomestico");
  }
}
