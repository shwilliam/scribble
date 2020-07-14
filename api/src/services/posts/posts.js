import {requireAuth} from 'src/lib/auth'
import {db} from 'src/lib/db'

export const posts = () => {
  return db.post.findMany({
    where: {private: false},
    orderBy: {createdAt: 'desc'},
  })
}

export const post = ({id}) => {
  return db.post.findOne({
    where: {id},
  })
}

export const createPost = ({input}) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({id, input}) => {
  requireAuth()
  return db.post.update({
    data: input,
    where: {id},
  })
}

export const deletePost = ({id}) => {
  requireAuth()
  return db.post.delete({
    where: {id},
  })
}
