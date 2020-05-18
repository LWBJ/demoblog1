import React from 'react'
import {Formik, Field, Form} from 'formik'

function PlaceFilter(props) {
    let handleSubmit = (values, {setSubmitting})=>{
        props.onSubmit(values)
        setSubmitting(false)
    }
    
    let handleReset = ()=>{
        props.onSubmit({
            name: '',
            race: '',
            face: '',
            worn_out: '',
            asc: 'Ascending'
        })
    }
    
    return(
      <Formik
        initialValues={{
            name: '',
            race: '',
            face: '',
            worn_out: '',
            asc: 'Ascending',
        }}
        onSubmit={handleSubmit}
      >
        {props => (
        <div className='row border rounded border-primary p-4 mt-4'><div className='col'>
          
          <div className='row'><div className='col-12'>
            <h3>Filters</h3>  
          </div></div>
          
          <Form className='form'>
            <div className='form-row'>
              <div className='form-group col-12 col-md-6'>
                <label htmlFor='placeFilter-name'>Name: </label>
                <Field name='name' type='text' className='form-control' />
              </div>
              
              <div className='form-group col-12 col-md-6'>
                <label htmlFor='placeFilter-race'>Race: </label>
                <Field name='race' type='text' className='form-control' />
              </div>
              
              <div className='form-group col-12 col-md-6'>
                <label htmlFor='placeFilter-face'>Face: </label>
                <Field name='face' type='text' className='form-control' />
              </div>

              <div className='form-group col-6 col-md-3'>
                <label htmlFor='placeFilter-worn_out'>Worn Out: </label>
                <Field name='worn_out' as='select' className='form-control'>
                  <option>T</option>
                  <option>F</option>
                  <option></option>
                </Field>
              </div>
              
              <div className='form-group col-6 col-md-3'>
                <label htmlFor='placeFilter-asc'>Order: </label>
                <Field name='asc' as='select' className='form-control'>
                  <option>Ascending</option>
                  <option>Descending</option>
                </Field>
              </div>
            </div>
            
            <div className='form-row'>
              <button type='submit' className='btn btn-primary mr-1' disabled={props.isSubmitting}>Filter</button>
              <button type='reset' className='btn btn-danger' onClick={handleReset} disabled={!props.dirty || props.isSubmitting}>Reset</button>
            </div>

          </Form>   
          
        </div></div>  
        )}
      </Formik>
    )
        
}

export default PlaceFilter