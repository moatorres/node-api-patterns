import { ErroCampoObrigatorio } from './erros'

export default function campoObrigatorio(param) {
  throw new ErroCampoObrigatorio(param)
}
