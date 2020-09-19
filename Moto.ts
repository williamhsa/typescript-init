import { Veiculo } from './Veiculo'


export class Moto extends Veiculo {

  // sobrescrita em TS
  public acelerar(): void {
    this.velocidade = this.velocidade + 20
  }

}

/* sobrescrita é uma tecnica para a classe
* filha implementar seu proprio comportamento do metodo definido na
* classe pai */