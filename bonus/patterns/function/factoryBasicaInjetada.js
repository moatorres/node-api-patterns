'factoryBasicaInjetada.js'

// CommonJS
module.exports = function criarObjetoFuncional({ exemplo }) {
  return { funcaoSync, funcaoAsync }
  function funcaoSync() {
    return exemplo.get()
  }
  async function funcaoAsync() {
    return await exemplo.delete()
  }
}

// ES7
export default criarObjetoFuncional = ({ exemplo }) => {
  const funcaoSync = () => exemplo.get()
  const funcaoAsync = async () => exemplo.delete()
  return { funcaoSync, funcaoAsync }
}
