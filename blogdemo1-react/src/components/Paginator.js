import React from 'react'

function Paginator(props) {
    let noPages = 0
    let pageInputOptions = []
    
    if (typeof props.count === 'number' && props.count>0) {
      noPages = Math.ceil(props.count/props.pagination)
      for (let i=0; i<noPages; i++) {
        pageInputOptions.push( <option>{i+1}</option> )
      }
    }

    let previous = (props.current>1 ? <button onClick={()=>props.changePage(props.current - 1)}>Previous</button> : <button disabled={true}>Previous</button>)
    let forwards = (props.current<noPages ? <button onClick={()=>props.changePage(props.current + 1)}>forwards</button> : <button disabled={true}>Forwards</button>)
    
    return (
      <div>
        <span>
          {previous}
          <select value={props.current} onChange={ (e)=>props.changePage(e.target.value) }>
              {pageInputOptions}
          </select>
          {forwards}
        </span>
      </div>
    )
}

export default Paginator