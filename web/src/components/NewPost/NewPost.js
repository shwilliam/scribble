import {navigate, routes} from '@redwoodjs/router'
import {useFlash, useMutation} from '@redwoodjs/web'
import PostForm from 'src/components/PostForm'

import useClipboard from 'src/hooks/useClipboard'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const {addMessage} = useFlash()
  const {copy} = useClipboard()
  const [createPost, {loading, error}] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: ({createPost}) => {
      const {id} = createPost
      copy(`https://dood.link/${id}`).then(() => {
        navigate(routes.post({id}))
        addMessage('Success! Doodle link copied to clipboard 🎊', {
          classes: 'rw-flash-success',
        })
      })
    },
  })

  const onSave = input => {
    createPost({variables: {input}})
  }

  return <PostForm onSave={onSave} loading={loading} error={error} />
}

export default NewPost
