const Roupa = require('../models/roupaModel')
const gerarErro = require('../helpers/http-erro')

exports.getRoupas = async (req, res, next) => {
  try {
    const roupas = await Roupa.find()
    const status = roupas.length ? 200 : 404
    const sucesso = status === 200 ? true : false

    res.status(status).json({
      sucesso: sucesso,
      resultados: roupas.length,
      body: roupas,
    })
  } catch (erro) {
    gerarErro(res, erro)
  }
}

exports.criarRoupa = async (req, res, next) => {
  try {
    const novaRoupa = {
      sku: 'BLU-02',
      fabricante: 'Le Lis Blan',
      tamanho: 'PP',
      estampa: 'Branca',
      emEstoque: 2,
      preco: 329.9,
    }

    const roupa = await Roupa.create(novaRoupa)
    const status = roupa.ok ? 200 : 404
    const sucesso = status === 200 ? true : false

    res.status(status).json({
      sucesso: sucesso,
      body: roupa,
    })
  } catch (erro) {
    gerarErro(res, erro)
  }
}

exports.getRoupaPorId = async (req, res, next) => {}
exports.removerRoupa = async (req, res, next) => {}
exports.atualizarRoupa = async (req, res, next) => {}
