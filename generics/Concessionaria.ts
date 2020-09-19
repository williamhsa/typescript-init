import { Carro } from './Carro'
import { Pessoa } from './Pessoa'

import { ConcessionariaInterface } from './Concessionaria.interface'

export default class Concessionaria implements ConcessionariaInterface {

  private endereco: string = ''
  private listaDeCarros: Carro[]
  private listaDeCarros2: any

  constructor(endereco: string, listaDeCarros: Carro[]) {
    this.endereco = endereco
    this.listaDeCarros = listaDeCarros
  }

  public fornecerEndereco(): string {
    return this.endereco
  }

  public monstrarListaDeCarros(): Carro[] {
    // console.log('Lista de carros: \n -> ', this.listaDeCarros)
    return this.listaDeCarros
  }

  //método da interface
  public fornecerHorariosDeFuncionamento(): string {
    return 'De segunda a sexta das 8h00 as 18h00'
  }
}

export let mande: string = 'lala'