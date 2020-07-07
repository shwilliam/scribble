import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/web'
import {useState} from 'react'
import DrawingCanvas from 'src/components/DrawingCanvas'

const PostForm = props => {
  const [drawing, setDrawing] = useState('')
  const onSubmit = data => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <TextField
          name="image"
          defaultValue={props.post?.image}
          value={drawing}
          className="rw-input sr-only"
          errorClassName="rw-input rw-input-error sr-only"
          validation={{required: true}}
        />
        <DrawingCanvas onDraw={setDrawing} defaultValue={props.post?.image} />
        <FieldError name="image" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
