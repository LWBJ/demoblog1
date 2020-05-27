import React from 'react'

function RaceDisplayItem(props) {
    const item = props.item
    
    return (
        <div className='border rounded border-secondary p-4 col-12 h-100'>
          <p>Name: {item.name}</p>
          <p>Faces: {item.face_set_list.join(', ')}</p>
          <p>Place: {item.place_text}</p>
          <p>Date: {item.date}</p>
        </div>
    )
}

export default RaceDisplayItem