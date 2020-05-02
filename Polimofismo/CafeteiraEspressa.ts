import { Eletrodomestico } from "../Abstracao/Eletrodomestico";

export default class CafeteiraExpressa extends Eletrodomestico {
  constructor() {
    super("ANTONIO", 20);
  }

  private static AquecerAgua(): void {}

  private static MoveGraos(): void {}

  public PrepararCafe(): void {
    this.testar();
    CafeteiraExpressa.AquecerAgua();
    CafeteiraExpressa.MoveGraos();
  }

  public Ligar(): void {
    console.log("Ligando.....");
  }

  public Desligar() {
    console.log("Ligando.....");
  }
}
