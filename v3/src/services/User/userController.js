import UserEndpoint from './index'
import adaptarRequest from '../../helpers/adapt-request'

export default function userController(req, res) {
  const httpRequest = adaptarRequest(req)

  UserEndpoint(httpRequest)
    .then(({}) => res.set().status().send())
    .catch(() => res.status().end())
}
