export default function criarUserRepo({ Model }) {
  return Object.freeze({
    findAll,
    findByHash,
    findById,
    findByPostId,
    findReplies,
    insert,
    remove,
    update,
  })
  async function findAll({ apenasAtivos = true } = {}) {
    const db = await Model()
    const query = apenasAtivos ? { ativo: true } : {}
    const result = await db.collection('users').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }))
  }
  async function findById({ id: _id }) {
    const db = await Model()
    const result = await db.collection('users').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findByPostId({ postId, omitReplies = true }) {
    const db = await Model()
    const query = { postId: postId }
    if (omitReplies) {
      query.replyToId = null
    }
    const result = await db.collection('users').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }))
  }
  async function findReplies({ commentId, apenasAtivos = true }) {
    const db = await Model()
    const query = apenasAtivos
      ? { ativo: true, replyToId: commentId }
      : { replyToId: commentId }
    const result = await db.collection('users').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }))
  }
  async function insert({ id: _id = Id.makeId(), ...commentInfo }) {
    const db = await Model()
    const result = await db
      .collection('users')
      .insertOne({ _id, ...commentInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function update({ id: _id, ...commentInfo }) {
    const db = await Model()
    const result = await db
      .collection('users')
      .updateOne({ _id }, { $set: { ...commentInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...commentInfo } : null
  }
  async function remove({ id: _id }) {
    const db = await Model()
    const result = await db.collection('users').deleteOne({ _id })
    return result.deletedCount
  }
  async function findByHash(comment) {
    const db = await Model()
    const result = await db.collection('users').find({ hash: comment.hash })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }
}
