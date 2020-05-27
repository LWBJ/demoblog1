import React from 'react'

function PlaceDisplayItem(props){
    const item = props.item
    
    return(
      <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
        <div className='border rounded border-secondary p-4 my-2 col-12 h-100'>
          <p>Place: {item.name}</p>
          <p>Races: {item.race_set_list.join(', ')}</p>
          <p>Faces: {item.face_set_list.join(', ')}</p>
          <p>Worn out: {item.worn_out?'Yes':'No'}</p>
        </div>
      </div>
    )
}

export default PlaceDisplayItem