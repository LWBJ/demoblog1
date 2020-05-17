import React from 'react'
import RaceDisplayItem from './RaceDisplayItem.js'
import Paginator from './Paginator.js'

class RaceDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: [],
            page: 1,
            filters: {
                name: '',
                face: '',
                place: '',
                before: '',
                after: '',
                order: 'name',
                asc: true,
            }
        }
    }
    
    changePage(newPageNum) {
        this.setState({
            loading: true,
            page: parseInt(newPageNum)
        }, this.refreshData)
    }
    
    refreshData(){
        let url='http://127.0.0.1:8000/apidata/races/?page=' + this.state.page + '&'
        url += 'name=' + this.state.filters.name + '&'
        url += 'face=' + this.state.filters.face + '&'
        url += 'place=' + this.state.filters.place + '&'
        url += 'before=' + this.state.filters.before + '&'
        url += 'after=' + this.state.filters.after + '&'
        url += 'order=' + (this.state.filters.asc?'':'-') + this.state.filters.order
        
        fetch(url)
        .then(results=> results.json())
        .then(data => this.setState({
            data: data,
            loading: false
        }))
        .catch(err => this.setState({
            data: [],
            loading: false
        }))
    }
    
    componentDidMount() {
        this.refreshData()
    }
    
    render(){
        let count
        let queryset
        
        if (this.state.loading) {
            count = 'loading'
            queryset = <div><p>Loading</p></div>
        } else if (this.state.data.results && this.state.data.results.length > 0) {
            count = this.state.data.count
            queryset = []
            for (let i=0; i<this.state.data.results.length; i++) {
                queryset.push(<RaceDisplayItem item={this.state.data.results[i]}/>)
            }
        } else {
            count = 0
            queryset = <div><p>No data</p></div>
        }
        
        const pagination = 3
        
        return (
          <div>
            <Paginator 
              count = {count}
              id = 'races'
              pagination = {pagination}
              current = {this.state.page}
              changePage = {(newPageNum)=>this.changePage(newPageNum)}
            />
            <p>Total Results: {count}</p>
            {queryset}
          </div>
        )
    }
}

export default RaceDisplay