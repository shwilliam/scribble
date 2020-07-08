import {useMutation, useFlash} from '@redwoodjs/web'
import {navigate, routes} from '@redwoodjs/router'
import PostForm from 'src/components/PostForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const {addMessage} = useFlash()
  const [createPost, {loading, error}] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: ({createPost}) => {
      navigate(routes.post({id: createPost.id}))
      addMessage('Doodle published successfully! 🎊', {
        classes: 'rw-flash-success',
      })
    },
  })

  const onSave = input => {
    createPost({variables: {input}})
  }

  return <PostForm onSave={onSave} loading={loading} error={error} />
}

export default NewPost
