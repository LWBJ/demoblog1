import React from 'react'
import Paginator from './Paginator.js'
import PlaceFilter from './PlaceFilter.js'
import PlaceDisplayItem from './PlaceDisplayItem.js'

class PlaceDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: [],
            page: 1,
            filters: {
                name: '',
                race: '',
                face: '',
                worn_out: '',
                order: 'name',
                asc: true
            }
        }
    }
    
    changeFilter(values){
        this.setState({
            loading: true,
            page: 1,
            filters: {
                name: values.name,
                race: values.race,
                face: values.face,
                worn_out: values.worn_out,
                order: 'name',
                asc: (values.asc === 'Ascending')
            }
        }, this.refreshData)
    }
    
    changePage(pageNum) {
        this.setState({
            loading: true,
            page: parseInt(pageNum),
        }, this.refreshData)
    }
    
    refreshData(){
        let url = 'https://lwbjblogdemo1.herokuapp.com/apidata/places/?page=' + this.state.page + '&'
        
        url += 'name=' + this.state.filters.name + '&'
        url += 'race=' + this.state.filters.race + '&'
        url += 'face=' + this.state.filters.face + '&'
        url += 'worn_out=' + this.state.filters.worn_out + '&'
        url += 'order=' + (this.state.filters.asc?'':'-') + this.state.filters.order + '&'
        
        fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({
                data: data,
                loading: false
            })
        })
        .catch(err => {
            this.setState({
                data: [],
                loading: false
            })
        })
    }
    
    componentDidMount(){
        this.refreshData()
    }
    
    render(){
        
        let queryset
        let count
        let loadingIndicator = null
        
        if (this.state.loading){
            loadingIndicator = <div className='loading-indicator border border-secondary'><h1>LOADING</h1></div>
        }
        
        if (this.state.data.results && this.state.data.results.length > 0) {
            count = this.state.data.count
            queryset = this.state.data.results.map(item => {
                return (
                  <div className='col-12 col-md-6 col-lg-4 col-xl-3 py-4' key={item.url}>
                    <PlaceDisplayItem item={item} />
                  </div>
                )
            })
        } else {
            queryset = <div className='col-12'><p>No Data</p></div>
            count = 0
        }
        
        const pagination = 100
        
        return(
          <div>
            {loadingIndicator}
            
            <div className='row'><div className='col-12'>
              <h2 className='mt-4'>Places</h2>
            </div></div>
          
            <PlaceFilter onSubmit={(values)=>this.changeFilter(values)} />
            
            <div className='row border rounded border-primary p-4 mt-4'><div className='col'>
              
              <Paginator 
                count={count}
                pagination = {pagination}
                id = 'places'
                current={this.state.page}
                changePage={(newPageNum)=>this.changePage(newPageNum)}
              />
              
              <div className='row mt-4'><div className='col-12'>
                <p>Total Results: {count}</p>
              </div></div>
            
              <div className='row mb-4'>
                {queryset}
              </div>
              
              <Paginator 
                count={count}
                pagination = {pagination}
                id = 'placesBottom'
                current={this.state.page}
                changePage={(newPageNum)=>this.changePage(newPageNum)}
              />
              
            </div></div>
          </div>
        )
    }
}

export default PlaceDisplay