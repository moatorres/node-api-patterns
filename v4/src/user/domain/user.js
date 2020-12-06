import campoObrigatorio from '../../helpers/campo-obrigatorio'

export default function criarGerarUser({ md5, sanitizar }) {
  return function gerarUser({
    nome = campoObrigatorio('nome'),
    email = campoObrigatorio('email'),
    senha = campoObrigatorio('senha'),
    source,
  } = {}) {
    if (nome.length < 2) {
      throw new Error('Nome não pode ser menor que 2 caracteres')
    }

    let nomeSanitizado = sanitizar(nome)

    if (nomeSanitizado.length < 1) {
      throw new Error('Nome não contém texto útil')
    }

    nome = nomeSanitizado

    return Object.freeze({
      getNome: () => nome,
      getEmail: () => email,
      getSenha: () => senha,
      getHash: () => gerarHash(),
    })

    function gerarHash() {
      return md5(nome, senha, email)
    }
  }
}
