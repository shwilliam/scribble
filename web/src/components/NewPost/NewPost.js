import {navigate, routes} from '@redwoodjs/router'
import {useFlash, useMutation} from '@redwoodjs/web'
import PostForm from 'src/components/PostForm'

import {copyToClipboard} from 'src/lib/clipboard'

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
      const {id} = createPost
      copyToClipboard(`${process.env.REACT_APP_BASE_URL}/posts/${id}`).then(
        () => {
          navigate(routes.post({id}))
          addMessage('Success! Doodle link copied to clipboard 🎊', {
            classes: 'rw-flash-success',
          })
        },
      )
    },
  })

  const onSave = input => {
    createPost({variables: {input}})
  }

  return <PostForm onSave={onSave} loading={loading} error={error} />
}

export default NewPost
