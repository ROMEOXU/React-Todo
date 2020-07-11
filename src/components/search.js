import React from 'react'

class Search extends React.Component {
    constructor(){
        super();
        this.state={
            searchData:'',
            newdata:[]
        };
    }
    searchChange = (e)=>{
        this.setState({
            searchData: e.target.value
        })
    }
    searchSubmit = ()=>{
        this.setState({
            newdata:this.props.data.filter(e=>e.name===this.state.searchData),
            searchData:''
        })
    }
    render(){return (
        <div>
            <input type="text" name="search" onChange={this.searchChange} value={this.state.searchData}/>
            <button onClick={this.searchSubmit}>Search</button><br/>
            search  your to do :{this.state.newdata.map(e=><h3>{e.name}</h3>)}
        </div>)
    }
}
export default Search;