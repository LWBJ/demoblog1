import React from 'react'

function Paginator(props) {
    let nextPage = props.current + 1
    let prevPage = props.current - 1
    let previous = (props.previous ? <button onClick={()=>props.changePage(prevPage)}>Previous</button> : <button disabled={true}>Previous</button>)
    let forwards = (props.forwards ? <button onClick={()=>props.changePage(nextPage)}>forwards</button> : <button disabled={true}>Forwards</button>)
    
    return (
      <div>
        <span>
          {previous}
          <select value={props.current} onChange={ (e)=>props.changePage(e.target.value) }>
              {props.pageInputOptions}
          </select>
          {forwards}
        </span>
      </div>
    )
}

export default Paginator