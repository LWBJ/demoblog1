import React from 'react'

class FaceDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : null,
        }
    }
    
    refreshData(){
        let url = 'http://127.0.0.1:8000/apidata/faces/?'
        fetch(url)
        .then( data => {return data.json()})
        .then(data=>{
            this.setState({data: data})
        })
    }
    
    componentDidMount(){
        this.refreshData()
    }
    
    render(){
        let count = (this.state.data?this.state.data.count:'loading')
        let list
        if (this.state.data){
            list = this.state.data.results.map(i=><li key={i.url}>{i.name}</li>)
        }
        
        return (
          <div>
            <h2>Title here</h2>
            <p>Total Results: {count}</p>
            <ul>{list}</ul>
          </div>
        )
    }
}

export default FaceDisplay