import React from 'react'

function FaceDisplayItem(props) {
    const item = props.item
    
    return(
      <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
        <div className='border rounded border-secondary p-4 my-2 col-12'>
          <p>Face: {item.name}</p>
          <p>Race: {item.race_text}</p>
          <p>Place: {item.place_text}</p>
          <p>Familiar: {item.familiar?'Yes':'No'}</p>
          <p>Worn out: {item.worn_out?'Yes':'No'}</p>
        </div>
      </div>
    )
}

export default FaceDisplayItem