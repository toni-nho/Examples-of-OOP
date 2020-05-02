export default interface IRepositorio {
  Adicionar(antonio: string): void;
  remover(): void;
}

export default class Repositorio implements IRepositorio {
  public Adicionar(): void {
    console.log("Adicionar itens");
  }
}

class UsoImplementacao {
  public Processo(): void {
    const repositorio = new Repositorio();
    repositorio.Adicionar();
  }
}

class UsoAbstracao {
  private readonly _repositorio: IRepositorio;

  constructor(repositorio: IRepositorio) {
    this._repositorio = repositorio;
  }

  public Processo(): void {
    this._repositorio.Adicionar();
  }
}
