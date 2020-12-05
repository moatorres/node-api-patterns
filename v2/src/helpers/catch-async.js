const gerarErro = require('./http-erro')

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((erro) => next(gerarErro(erro)))
  }
}
