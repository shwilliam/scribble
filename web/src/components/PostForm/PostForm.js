import {
  CheckboxField,
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
    const {doodle, label, hidden} = data
    props.onSave(
      {image: doodle, label: label, private: hidden},
      props?.post?.id,
    )
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

        <div className="rw-input-group">
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
        </div>

        <div className="rw-input-group">
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
            placeholder="a beautiful flower"
          />
          <FieldError name="label" className="rw-field-error" />
        </div>

        <CheckboxField name="hidden" className="rw-input" />
        <Label
          name="hidden"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          {' '}
          private
        </Label>

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue rw-button-submit"
          >
            publish
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
