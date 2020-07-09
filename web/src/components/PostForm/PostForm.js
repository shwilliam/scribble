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
    const {doodle, label} = data
    props.onSave({image: doodle, label: label}, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper doodle__wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="doodle"
          className="rw-label hide-screens"
          errorClassName="rw-label rw-label-error hide-screens"
        >
          doodle
        </Label>
        <TextField
          name="doodle"
          defaultValue={props.post?.image}
          value={drawing}
          className="rw-input hide-screens"
          errorClassName="rw-input rw-input-error hide-screens"
          validation={{required: true}}
        />
        <DrawingCanvas onDraw={setDrawing} defaultValue={props.post?.image} />
        <FieldError name="doodle" className="rw-field-error" />

        <Label
          name="label"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          doodle label:{' '}
        </Label>
        <TextField
          name="label"
          defaultValue={props.post?.label ?? ''}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{required: true}}
        />
        <FieldError name="label" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-green"
          >
            publish
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
