export default function criarGerarUser({ md5, sanitize }) {
  return function gerarUser({ nome, email, senha, ativo } = {}) {
    if (!nome) {
      throw new Error('User deve ter nome')
    }
    if (nome.length < 2) {
      throw new Error('Nome não pode ser menor que 2 caracteres')
    }

    let nomeSanitizado = sanitize(nome).trim()

    if (nomeSanitizado.length < 1) {
      throw new Error('Nome não contém texto útil')
    }

    return Object.freeze({
      getNome: () => nome,
      getEmail: () => email.trim(),
      getHash: () => hash || (hash = gerarHash()),
      marcarRemovido: () => {
        nomeSanitizado = 'usuário removido'
        nome = 'removido'
      },
      ativar: () => {
        ativo = true
      },
      inativar: () => {
        ativo = false
      },
    })

    function gerarHash() {
      return md5(nomeSanitizado, ativo, nome, senha, email)
    }
  }
}
