import React from 'react'

function RaceDisplayItem(props) {
    const item = props.item
    
    return (
      <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
        <div className='border rounded border-secondary p-4 my-2 col-12 h-100'>
          <p>Name: {item.name}</p>
          <p>Faces: {item.face_set_list.join(', ')}</p>
          <p>Place: {item.place_text}</p>
          <p>Date: {item.date}</p>
        </div>
      </div>
    )
}

export default RaceDisplayItem