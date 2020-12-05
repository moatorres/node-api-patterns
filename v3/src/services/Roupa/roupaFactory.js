import campoObrigatorio from '../../helpers/campo-obrigatorio'

export default function makeRoupa({ roupaInfo }) {
  const roupaValida = validar(roupaInfo)
  const roupaNormalizada = normalizar(roupaValida)
  const roupaAprovada = aprovar(roupaNormalizada)

  function validar({
    sku = campoObrigatorio('sku'),
    preco = campoObrigatorio('preco'),
    emEstoque = campoObrigatorio('emEstoque'),
    ...roupaInfo
  }) {
    if (!typeof sku === 'string') {
      sku = JSON.stringify(sku)
    }

    if (!typeof preco === 'number') {
      preco = Number(preco)
    }
    if (!typeof emEstoque === 'number') {
      emEstoque = Number(emEstoque)
    }

    return { sku, preco, emEstoque, ...roupaInfo }
  }

  function normalizar({ sku, ...roupaInfo }) {
    return { sku: sku.trim(), ...roupaInfo }
  }

  function aprovar({ ...roupaInfo }) {
    return roupaInfo
  }

  return Object.freeze(roupaAprovada)
}
