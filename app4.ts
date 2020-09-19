import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import { Pessoa } from './Pessoa'
import { PessoaDao } from './PessoaDao'

let dao: ConcessionariaDao = new ConcessionariaDao()
let doaPessoa: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('', '')

console.log(dao.inserir(concessionaria))
console.log(doaPessoa.inserir(pessoa))

// fazer para classe carro e moto





