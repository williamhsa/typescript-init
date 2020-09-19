import { DaoInterface } from "./Dao.interface";
import { Pessoa } from './Pessoa'

export class PessoaDao implements DaoInterface {
  
  nomeTabela: string = 'tb_pessoa';

  inserir(object: Pessoa): boolean {
    console.log('logica inserir Pessoa');
    return true;
  }

  atualizar(object: Pessoa): boolean {
    console.log('logica atualizar');
    return true;
  }

  remover(id: number): Pessoa {
    console.log('logica remover');
    return new Pessoa('', '');
  }

  selecionar(id: number): Pessoa {
    console.log('logica selecionar');
    return new Pessoa('', '');
  }

  selecionarTodos(): [Pessoa] {
    console.log('logica selecionarTodos');
    return [new Pessoa('', '')];
  }
  
}
