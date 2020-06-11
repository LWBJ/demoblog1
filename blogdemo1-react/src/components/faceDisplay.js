import React from 'react'
import FaceDisplayItem from './FaceDisplayItem.js'
import Paginator from './Paginator.js'
import FaceFilter from './FaceFilter.js'

class FaceDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            data : [],
            page : 1,
            filters : {
                name: '',
                race: '',
                place: '',
                familiar: '',
                worn_out: '',
                order: 'name',
                asc: true
            }
        }
    }
    
    refreshData(){
        let url = 'https://lwbjblogdemo1.herokuapp.com/apidata/faces/?page=' + this.state.page + '&'
        url += 'name=' + this.state.filters.name +'&'
        url += 'race=' + this.state.filters.race +'&'
        url += 'place=' + this.state.filters.place +'&'
        url += 'familiar=' + this.state.filters.familiar +'&'
        url += 'worn_out=' + this.state.filters.worn_out +'&'
        url += 'order=' + (this.state.filters.asc?'':'-') + this.state.filters.order +'&'
        
        
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
    
    changeFilter(values) {
        this.setState({
            loading: true,
            filters : {
                name: values.name,
                race: values.race,
                place: values.place,
                familiar: values.familiar,
                worn_out: values.worn_out,
                order: values.order.toLowerCase(),
                asc: (values.asc==='Ascending')
            },
            page: 1
        }, this.refreshData)
    }
    
    render(){
        let count
        let queryset
        let loadingIndicator = null
        
        if (this.state.loading){
            loadingIndicator = <div className='loading-indicator border border-secondary'><h1>LOADING</h1></div>
        }
        
        if (this.state.data.results && this.state.data.results.length > 0) {
            queryset = this.state.data.results.map(item=>{
                return (
                  <div className='col-12 col-md-6 col-lg-4 col-xl-3 py-4' key='item.url'>
                    <FaceDisplayItem item={item} />
                  </div>
                )
            })
            count = this.state.data.count
        } else {
            queryset = <div className='col-12'><p>No data</p></div>
            count = 0
        }
        
        const pagination = 100
        
        return (
          <div>
            {loadingIndicator}
          
            <div className='row'><div className='col'>
              <h2 className='mt-4'>Faces</h2>
            </div></div>

            <FaceFilter onSubmit={(values)=> this.changeFilter(values)} />
            
            <div className='row border rounded border-primary p-4 mt-4'><div className='col'>
            
              <Paginator 
                count={count}
                pagination = {pagination}
                id = 'faces'
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
                id = 'faces-low'
                current={this.state.page}
                changePage={(newPageNum)=>this.changePage(newPageNum)}
              />
            </div></div>
          </div>
        )
    }
}

export default FaceDisplay