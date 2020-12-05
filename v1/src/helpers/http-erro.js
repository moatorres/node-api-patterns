module.exports = gerarErro = (res, erro) => {
  res.status(500).json({
    sucesso: false,
    erro: erro.name,
    mensagem: erro.message,
  })
}
