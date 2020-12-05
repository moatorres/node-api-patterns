'factoryBasicaDireta.js'

import exemplo from 'lib-exemplo'

// CommonJS
module.exports = function criarObjetoFuncional() {
  return { funcaoAsync, funcaoSync }
  async function funcaoAsync() {
    return await exemplo.get()
  }
  function funcaoSync() {
    return exemplo.getSync()
  }
}

// ES7
export default minhaFactory = () => {
  const funcaoSync = () => exemplo.getSync()
  const funcaoAsync = async () => exemplo.getAsync()
  return { funcaoSync, funcaoAsync }
}
