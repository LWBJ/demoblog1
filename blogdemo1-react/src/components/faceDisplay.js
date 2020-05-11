import React from 'react'
import FaceDisplayItem from './FaceDisplayItem.js'
import Paginator from './Paginator.js'

class FaceDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            data : [],
            page : 2,
        }
    }
    
    refreshData(){
        let url = 'http://127.0.0.1:8000/apidata/faces/?page=' + this.state.page + '&'
        fetch(url)
        .then( results => {return results.json()})
        .then(data=>{
            this.setState({data: data, loading: false})
        })
        .catch(err=>{
            this.setState({data: [], loading: false})
        })
    }
    
    componentDidMount(){
        this.refreshData()
    }
    
    changePage(page) {
        this.setState({ page : parseInt(page), loading : true }, this.refreshData)
    }
    
    render(){
        let count = (!this.state.loading?this.state.data.count:'loading')
        let queryset
        if (this.state.loading){
            queryset = 'loading'
        } else if (this.state.data.results && this.state.data.results.length > 0) {
            queryset = this.state.data.results.map( item => {
                return <FaceDisplayItem item={item} />
            })
        } else {
            queryset = 'No data'
        }
        
        const pagination = 3
        let noPages = Math.ceil(this.state.data.count/pagination)
        let pageInputOptions = []
        for (let i=0; i<noPages; i++) {
            pageInputOptions.push( <option>{i+1}</option> )
        }
        let previous = (this.state.page<=1 ? false : true)
        let forwards = (this.state.page < noPages ? true : false)
        
        return (
          <div>
            <h2>Faces</h2>
            <p>Filters</p>
            <p>Total Results: {count}</p>
            <Paginator 
              max={3} 
              forwards={forwards} 
              previous={previous} 
              current={this.state.page}
              pageInputOptions={pageInputOptions}
              changePage={(newPageNum)=>this.changePage(newPageNum)}
            />
            <p>page: {this.state.page}</p>
            {queryset}
          </div>
        )
    }
}

export default FaceDisplay