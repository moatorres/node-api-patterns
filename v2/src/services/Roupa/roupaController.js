const Roupa = require('./roupaModel')
const catchAsync = require('../../helpers/catch-async')

exports.getRoupas = catchAsync(async (req, res, next) => {
  const roupas = await Roupa.find()
  const status = roupas.length ? 200 : 404
  const sucesso = status === 200 ? true : false

  res.status(status).json({
    sucesso: sucesso,
    resultados: roupas.length,
    body: roupas,
  })
})

exports.getRoupaPorId = async (req, res, next) => {}
exports.adicionarRoupa = async (req, res, next) => {}
exports.atualizarRoupa = async (req, res, next) => {}
exports.removerRoupa = async (req, res, next) => {}
