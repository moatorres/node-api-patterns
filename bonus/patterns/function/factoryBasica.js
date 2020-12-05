'factoryBasica.js'

// CommonJS
module.exports = function minhaFactory() {
  return { funcaoSync, funcaoAsync }
  function funcaoSync() {}
  async function funcaoAsync() {}
}

// ES7
export default minhaFactory = () => {
  const funcaoSync = () => {}
  const funcaoAsync = async () => {}
  return { funcaoSync, funcaoAsync }
}
