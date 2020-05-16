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
        let url = 'http://127.0.0.1:8000/apidata/faces/?page=' + this.state.page + '&'
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
            }
        }, this.refreshData)
    }
    
    render(){
        let count = (!this.state.loading?this.state.data.count:'loading')
        let queryset
        if (this.state.loading){
            queryset = 'loading'
            count = 'loading'
        } else if (this.state.data.results && this.state.data.results.length > 0) {
            queryset = this.state.data.results.map(item=>{
                return <FaceDisplayItem item={item} />
            })
            count = this.state.data.count
        } else {
            queryset = 'No data'
            count = 0
        }
        
        const pagination = 3
        
        return (
          <div>
            <h2>Faces</h2>
            <p>Filters</p>
            <FaceFilter onSubmit={(values)=> this.changeFilter(values)} />
            
            
            <p>Current Name Filter: {this.state.filters.name}</p>
            <p>Total Results: {count}</p>
            <Paginator 
              count={count}
              pagination = {pagination}
              current={this.state.page}
              changePage={(newPageNum)=>this.changePage(newPageNum)}
            />
            <p>page: {this.state.page}</p>
            {queryset}
          </div>
        )
    }
}

export default FaceDisplay