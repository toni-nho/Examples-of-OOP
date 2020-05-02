import CafeteiraExpressa from "../Polimofismo/CafeteiraEspressa";

export default class AutomacaoCafe {
  public ServirCafe(): void {
    const expresso = new CafeteiraExpressa();
    expresso.Ligar();
    expresso.PrepararCafe();
    expresso.Desligar();
  }
}
