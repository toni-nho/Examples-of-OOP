import Pessoa from "../Estado x Comportamento/Pessoa";

export default class Funcionario extends Pessoa {
  public dataAdmissao: Date;
  public registro: string;
}

class Processo {
  public Execucao(): void {
    const funcionario = new Funcionario();
    funcionario.nome = "Antonio Flávio";
    funcionario.registro = "Hoje";
  }
}
