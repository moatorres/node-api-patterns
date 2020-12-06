import catchAsync from '../../helpers/catch-async'

export default function criarPostController({ adicionarUser }) {
  return async function postController(httpRequest) {
    const { source = {}, ...userInfo } = httpRequest.body

    source.ip = httpRequest.ip
    source.browser = httpRequest.headers['User-Agent']

    if (httpRequest.headers['Referer']) {
      source.referrer = httpRequest.headers['Referer']
    }

    return await catchAsync(adicionarUser({ ...userInfo, source }))
  }
}
