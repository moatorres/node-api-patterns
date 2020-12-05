import MongoRepositorio from './classRepo'
import criarMongoRepositorio from './factoryRepo'

// INFO: Exemplo #1 - Exporta uma função que retorna uma instância do Repositório criado com o Class Constructor sem Model atrelado
export const criarClassRepoInstance = (Model) => new MongoRepositorio(Model)
// import { criarClassRepoInstance } from './bonus/repositorio'
// const userRepo = criarClasseRepoInstance(UserModel)
// const registros = await userRepo.listar()

// INFO: Exemplo #2 - Exporta uma instância do Repositório criado com o Class Constructor já atrelada ao Model
export default new MongoRepositorio(UserModel)
// import userRepo from './bonus/repositorio'
// const registros = await userRepo.listar()

// INFO: Exemplo #3 - Exporta uma função que retorna uma instância do Repositório criado com o Factory Constructor sem Model atrelado
export { default } from './criarMongoRepositorio'
// import { criarMongoRepositorio } from './bonus/repositorio'
// const userRepo = criarMongoRepositorio({ UserModel })
// const registros = await userRepo.listar()

// INFO: Exemplo #4 - Exporta uma instância do Repositório criado com o Factory Constructor já atrelada ao Model
export const userRepo = criarMongoRepositorio(UserModel)
// import { userRepo } from './bonus/repositorio'
// const registros = await userRepo.listar()
