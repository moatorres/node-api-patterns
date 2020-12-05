module.exports = gerarErro = (erro) => {
  console.error({
    erro: erro.name,
    mensagem: JSON.stringify(erro.message),
  })
}
