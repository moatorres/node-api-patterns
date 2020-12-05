import Roupa from './roupaModel'
import makeRoupaRepo from './roupaRepo'
import makeRoupaEndpoint from './roupaEndpoint'

const RoupaRepo = makeRoupaRepo({ Roupa })
const RoupaEndpoint = makeRoupaEndpoint({ RoupaRepo })

export default RoupaEndpoint
export { default as RoupaController } from './roupaController'
