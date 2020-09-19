import { DaoInterface } from "./Dao.interface";
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
  
  nomeTabela: string = 'tb_concessionaria';

  inserir(object: Concessionaria): boolean {
    console.log('logica inserir');
    return true;
  }

  atualizar(object: Concessionaria): boolean {
    console.log('logica atualizar');
    return true;
  }

  remover(id: number): Concessionaria {
    console.log('logica remover');
    return new Concessionaria('', []);
  }

  selecionar(id: number): Concessionaria {
    console.log('logica selecionar');
    return new Concessionaria('', []);
  }

  selecionarTodos(): [Concessionaria] {
    console.log('logica selecionarTodos');
    return [new Concessionaria('', [])];
  }
  
}
