class RequiredParamError extends Error {
  constructor(param) {
    super(`${param} não pode ser null ou undefined.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParamError)
    }
  }
}

export default function campoObrigatorio(param) {
  throw new RequiredParamError(param)
}
