import gerarFakeUser from '../../__test__/fixtures/user'
import gerarUser from '.'

describe('user', () => {
  it.todo('deve ter um nome', () => {
    const user = gerarFakeUser({ nome: null })
    expect(() => gerarUser(user)).toThrow('Usuário deve have an nome.')
  })

  it.todo('deve ter um email', () => {
    const user = gerarFakeUser({ email: null })
    expect(() => gerarUser(user)).toThrow('Usuário deve ter um email.')
  })

  it.todo('must have valid text', () => {
    const user = gerarFakeUser({ text: null })
    expect(() => gerarUser(user)).toThrow(
      'Usuário deve include at least one character of text.'
    )
  })

  it.todo('can be published', () => {
    const unpublished = gerarFakeUser({ published: false })
    const user = gerarUser(unpublished)
    expect(user.isPublished()).toBe(false)
    user.publish()
    expect(user.isPublished()).toBe(true)
  })

  it.todo('can be unpublished', () => {
    const unpublished = gerarFakeUser({ published: true })
    const user = gerarUser(unpublished)
    expect(user.isPublished()).toBe(true)
    user.unPublish()
    expect(user.isPublished()).toBe(false)
  })

  it.todo('sanit.todoizes it.todos text', () => {
    const sane = gerarUser({
      ...gerarFakeUser({ text: '<p>This is fine</p>' }),
    })
    const insane = gerarUser({
      ...gerarFakeUser({
        text: '<script>This is not so fine</script><p>but this is ok</p>',
      }),
    })
    const totallyInsane = gerarFakeUser({
      text: '<script>All your base are belong to us!</script>',
    })

    expect(sane.getText()).toBe('<p>This is fine</p>')
    expect(insane.getText()).toBe('<p>but this is ok</p>')
    expect(() => gerarUser(totallyInsane)).toThrow(
      'Comment contains no usable text.'
    )
  })

  it.todo('can be marked deleted', () => {
    const fake = gerarFakeUser()
    const c = gerarUser(fake)
    c.markDeleted()
    expect(c.isDeleted()).toBe(true)
    expect(c.getText()).toBe('.xX This user has been deleted Xx.')
    expect(c.getAuthor()).toBe('deleted')
  })
})
