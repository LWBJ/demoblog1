import React from 'react'
import RaceDisplayItem from './RaceDisplayItem.js'
import RaceFilter from './RaceFilter.js'
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
    
    changeFilter(values) {
        this.setState({
            loading: true,
            page: 1,
            filters: {
                name: values.name,
                face: values.face,
                place: values.place,
                before: values.before,
                after: values.after,
                order: values.order.toLowerCase(),
                asc: (values.asc === 'Ascending'),
            }
        }, this.refreshData)
    }
    
    refreshData(){
        let url='https://lwbjblogdemo1.herokuapp.com/apidata/races/?page=' + this.state.page + '&'
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
        let loadingIndicator = null
        
        if (this.state.loading){
            loadingIndicator = <div className='loading-indicator border border-secondary'><h1>LOADING</h1></div>
        }
        
        if (this.state.data.results && this.state.data.results.length > 0) {
            count = this.state.data.count
            
            queryset = this.state.data.results.map(item=>{
                return (
                  <div className='col-12 col-md-6 col-lg-4 col-xl-3 py-4' key={item.url}>
                    <RaceDisplayItem item={item}/>
                  </div>
                )
            })
        } else {
            count = 0
            queryset = <div className='col-12'><p>No data</p></div>
        }
        
        const pagination = 100
        
        return (
          <div>
            {loadingIndicator}
          
            <div className='row'><div className='col-12'>
              <h2 className='mt-4'>Races</h2>
            </div></div>
            
            <RaceFilter onSubmit={(values)=>this.changeFilter(values)} />
            
            <div className='row border rounded border-primary p-4 mt-4'><div className='col-12'>
              <Paginator 
                count = {count}
                id = 'races'
                pagination = {pagination}
                current = {this.state.page}
                changePage = {(newPageNum)=>this.changePage(newPageNum)}
              />
              
              <div className='row mt-4'><div className='col-12'>
                <p>Total Results: {count}</p>
              </div></div>
              
              <div className='row mb-4'>
                {queryset}
              </div>
              
              <Paginator 
                count = {count}
                id = 'racesBottom'
                pagination = {pagination}
                current = {this.state.page}
                changePage = {(newPageNum)=>this.changePage(newPageNum)}
              />
            </div></div>
          </div>
        )
    }
}

export default RaceDisplay