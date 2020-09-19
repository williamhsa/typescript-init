
export interface DaoInterface {
  nomeTabela: string

  inserir(object: any): boolean 

  atualizar(object: any): boolean

  remover(id: number): any

  selecionar(id: number): any

  selecionarTodos(): [any]

}


/*
*  vai nos dizer o que cada uma das classes vao precisar implementar
* para deixar de uma forma mais homogenea
*
* criamos apenas as assinaturas dos metodos que irao ser necessarios ser
* implementados nas classes que vao utilizar
*
* */