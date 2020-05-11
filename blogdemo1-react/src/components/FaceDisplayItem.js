import React from 'react'

function FaceDisplayItem(props) {
    const item = props.item
    
    return(
      <ul>
        <li>Face: {item.name}</li>
        <li>Race: {item.race_text}</li>
        <li>Place: {item.place_text}</li>
        <li>Familiar: {item.familiar?'Yes':'No'}</li>
        <li>Worn out: {item.worn_out?'Yes':'No'}</li>
      </ul>
    )
}

export default FaceDisplayItem