import RoupaEndpoint from './index'
import adaptarRequest from '../../helpers/adapt-request'

export default function roupaController(req, res) {
  const httpRequest = adaptarRequest(req)

  RoupaEndpoint(httpRequest)
    .then(({ headers, statusCode, data }) =>
      res.set(headers).status(statusCode).send(data)
    )
    .catch((e) => {
      res.status(500).end()
      console.error(e)
    })
}
