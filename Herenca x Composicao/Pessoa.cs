import { Pessoa } from "./pessoa";

export defaut class PessoaFisica  Pessoa {
    cpf: string;
}

export interface PessoaFisica2 {
    pessoa: Pessoa;
    cpf: string;
}

export interface TestesHerancaCompostion {

}