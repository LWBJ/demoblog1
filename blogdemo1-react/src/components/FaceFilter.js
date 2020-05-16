import React from 'react'
import { Formik, Form, Field } from 'formik'

function FaceFilter(props) {
    return(
      <Formik
        initialValues = {{
            name: '',
            race: '',
            place: '',
            familiar: null,
            worn_out: null,
            order: 'name',
            asc: true,
        }}
        onSubmit = {values=>{this.props.onSubmit(values)}}
      >
        <Form>
          <div>
            <label htmlFor='name'>Name: </label>
            <Field name='name' type='text' />
          </div>
          
          <div>
            <label htmlFor='race'>Race: </label>
            <Field name='race' type='text' />
          </div>
          
          <div>
            <label htmlFor='place'>Place: </label>
            <Field name='place' type='text' />
          </div>
          
          <div>
            <label htmlFor='familiar'>Familiar: </label>
            <Field name='familiar' as='select'>
              <option>T</option>
              <option>F</option>
            </Field>
          </div>
          
          <div>
            <label htmlFor='worn_out'>Worn Out: </label>
            <Field name='worn_out' as='select'>
              <option>T</option>
              <option>F</option>
            </Field>
          </div>
          
          <div>
            <label htmlFor='order'>Order: </label>
            <Field name='order' as='select'>
              <option>Name</option>
              <option>Race</option>
              <option>Place</option>
            </Field>
          </div>
          
          <div>
            <label htmlFor='asc'>Ascending or Descending: </label>
            <Field name='asc' as='select'>
              <option>Ascending</option>
              <option>Descending</option>
            </Field>
          </div>
          
          <button type='submit'>Submit</button>
          
        </Form>
      </Formik>
    )
}

export default FaceFilter