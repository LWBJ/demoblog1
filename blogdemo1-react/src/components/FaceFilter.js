import React from 'react'
import { Formik, Form, Field } from 'formik'

function FaceFilter(props) {
    let resetFilter = ()=>props.onSubmit({
            name: '',
            race: '',
            place: '',
            familiar: '',
            worn_out: '',
            order: 'Name',
            asc: 'Ascending',
        })
    
    let submitFilter = (values, {setSubmitting}) =>{
        props.onSubmit(values)
        setSubmitting(false)
    }
    
    return(
      <Formik
        initialValues = {{
            name: '',
            race: '',
            place: '',
            familiar: '',
            worn_out: '',
            order: 'Name',
            asc: 'Ascending',
        }}
        onSubmit = {submitFilter}
      >
        {props=>(
        <div className='row border rounded border-primary p-4 mt-4'><div className='col'>
        
        <div className='row'><div className='col'>
          <h3>Filters</h3>
        </div></div>
        
        <Form className='form'>
        <div className='form-row'>
          <div className='form-group col-12 col-md-4'>
            <label htmlFor='faceFilter-name'>Name: </label>
            <Field id='faceFilter-name' name='name' type='text' className='form-control'/>
          </div>
          
          <div className='form-group col-12 col-md-4'>
            <label htmlFor='faceFilter-race'>Race: </label>
            <Field id='faceFilter-race' name='race' type='text' className='form-control'/>
          </div>
          
          <div className='form-group col-12 col-md-4'>
            <label htmlFor='faceFilter-place'>Place: </label>
            <Field id='faceFilter-place' name='place' type='text' className='form-control'/>
          </div>
        </div>
        
        <div className='form-row'>  
        <div className='col-12 col-md-4'><div className='form-row'> 
          <div className='form-group col-6'>
            <label htmlFor='faceFilter-familiar'>Familiar: </label>
            <Field id='faceFilter-familiar' name='familiar' as='select' className='form-control'>
              <option>T</option>
              <option>F</option>
              <option> </option>
            </Field>
          </div>

          <div className='form-group col-6'>
            <label htmlFor='faceFilter-worn_out'>Worn Out: </label>
            <Field id='faceFilter-worn_out' name='worn_out' as='select' className='form-control'>
              <option>T</option>
              <option>F</option>
              <option> </option>
            </Field>
          </div>
        </div></div>
          
        <div className='col-12 col-md-8'><div className='form-row'>
          <div className='form-group col-6'>
            <label htmlFor='faceFilter-order'>Order: </label>
            <Field id='faceFilter-order' name='order' as='select' className='form-control'>
              <option>Name</option>
              <option>Race</option>
              <option>Place</option>
            </Field>
          </div>
          
          <div className='form-group col-6'>
            <label htmlFor='faceFilter-asc'>Ascending or Descending: </label>
            <Field id='faceFilter-asc' name='asc' as='select' className='form-control'>
              <option>Ascending</option>
              <option>Descending</option>
            </Field>
          </div>
        </div></div>
        </div>
          
        <div className='form-row'>
          <button type='submit' className='btn btn-primary mr-1' disabled={props.isSubmitting}>Filter</button>
          <button type='reset' className='btn btn-danger' onClick={resetFilter} disabled={!props.dirty || props.isSubmitting}>Reset</button>
        </div>
        </Form>
        
        </div></div>
        )}
      </Formik>
    )
}

export default FaceFilter