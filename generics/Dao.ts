import { DaoInterface } from "./Dao.interface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';

  inserir(object: T): boolean {
    console.log('logica inserir Pessoa');
    return true;
  }

  atualizar(object: T): boolean {
    console.log('logica atualizar');
    return true;
  }

  remover(id: number): T {
    console.log('logica remover');
    return Object()
  }

  selecionar(id: number): T {
    console.log('logica selecionar');
    return Object()
  }

  selecionarTodos(): [T] {
    console.log('logica selecionarTodos');
    return [Object()];
  }
}