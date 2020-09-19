import { Veiculo } from './Veiculo'


export class Moto extends Veiculo {

  // sobrescrita em TS
  public acelerar(): void {
    this.velocidade = this.velocidade + 20
  }

}