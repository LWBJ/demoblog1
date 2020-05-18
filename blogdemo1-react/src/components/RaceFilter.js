import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

let validate=(values)=>{
    let errors={}
    if (values.before && values.after && values.before < values.after) {
        errors.before = 'This value cannot be before the date in the "after" filter'
        errors.after = 'This value cannot be after the date in the "before" filter'
    }
    
    return errors
}

function RaceFilter(props) {
    let handleReset = ()=>{
        props.onSubmit({
            name: '',
            face: '',
            place: '',
            before: '',
            after: '',
            order: 'Name',
            asc: 'Ascending',
        })
    }
    
    let handleSubmit = (values, {setSubmitting})=>{
        props.onSubmit(values)
        setSubmitting(false)
    }
    
    return(
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
            name: '',
            face: '',
            place: '',
            before: '',
            after: '',
            order: 'Name',
            asc: 'Ascending',
        }}
        validate= {validate}
      >
        {props=>(
          <div className='row border rounded border-primary p-4 mt-4'><div className='col-12'>
          
          <div className='row'><div className='col-12'>
            <h3>Filters</h3>
          </div></div>
          
          <Form className='form'>
            <div className='form-row'>
              <div className='form-group col-12 col-md-4'>
                <label htmlFor='raceFilter-name'>Name: </label>
                <Field id='raceFilter-name' name='name' type='text' className='form-control' />
              </div>
              <div className='form-group col-12 col-md-4'>
                <label htmlFor='raceFilter-face'>Face: </label>
                <Field id='raceFilter-face' name='face' type='text' className='form-control' />
              </div>
              <div className='form-group col-12 col-md-4'>
                <label htmlFor='raceFilter-place'>Place: </label>
                <Field id='raceFilter-place' name='place' type='text' className='form-control' />
              </div>
            </div>
            
            
            <div className='form-row'>
            
              <div className='col-12 col-lg-4'><div className='form-row'>
                <div className='form-group col-6'>
                  <label htmlFor='raceFilter-before'>Before: </label>
                  <Field id='raceFilter-before' name='before' type='date' className='form-control' />
                  <span className='text-danger'><ErrorMessage name='before' className='text-danger' /></span>
                </div>
                <div className='form-group col-6'>
                  <label htmlFor='raceFilter-after'>After: </label>
                  <Field id='raceFilter-after' name='after' type='date' className='form-control' />
                  <span className='text-danger'><ErrorMessage name='after' className='text-danger' /></span>
                </div>
              </div></div>
              
              
              <div className='col-12 col-lg-8'><div className='form-row'>
                <div className='form-group col-12 col-md-6'>
                  <label htmlFor='raceFilter-order'>Order: </label>
                  <Field id='raceFilter-order' name='order' as='select' className='form-control'>
                    <option>Name</option>
                    <option>Place</option>
                    <option>Date</option>
                  </Field>
                </div>
                <div className='form-group col-12 col-md-6'>
                  <label htmlFor='raceFilter-asc'>Ascending or Descending: </label>
                  <Field id='raceFilter-asc' name='asc' as='select' className='form-control'>
                    <option>Ascending</option>
                    <option>Descending</option>
                  </Field>
                </div>
              </div></div>
              
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

export default RaceFilter