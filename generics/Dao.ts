import { DaoInterface } from "./Dao.interface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';

  inserir(object: T): boolean {
    console.log('logica inserir');
    return true;
  }

  atualizar(object: T): boolean {
    console.log('logica atualizar');
    return true;
  }

  remover(id: number): T {
    console.log('id', id);
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

/*
*  usando generics
* na hora que essa classe Dao for instanciada vamos falar que tipo
* é esse <T>

*  ao inves de eu ter varis Daos
*  pessoaDao, concessionariaDao... eu crio uma generic Dao que recebe o tipo
*
* */