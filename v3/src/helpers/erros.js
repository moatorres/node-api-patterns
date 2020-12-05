export class ErroCampoObrigatorio extends Error {
  constructor(param) {
    super(`${param} não pode ser null ou undefined.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErroCampoObrigatorio)
    }
  }
}
