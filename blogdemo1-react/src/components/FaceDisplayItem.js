import React from 'react'

function FaceDisplayItem(props) {
    const item = props.item
    
    return(
        <div className='border rounded border-secondary p-4 col-12 h-100'>
          <p>Face: {item.name}</p>
          <p>Race: {item.race_text}</p>
          <p>Place: {item.place_text}</p>
          <p>Familiar: {item.familiar?'Yes':'No'}</p>
          <p>Worn out: {item.worn_out?'Yes':'No'}</p>
        </div>
    )
}

export default FaceDisplayItem