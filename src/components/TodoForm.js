import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            formData:''
        };
    }
    handlechange = (e)=>{
        this.setState({
            formData: e.target.value
        })
    }
    handlesumbit =(e)=>{
     e.preventDefault();
     this.props.addNew(this.state.formData);
     this.setState({formData:''});
    };
    render(){ return (
        <div>
            <form onSubmit={this.handlesumbit}>
            <input type='text' name='name'value={this.state.formData}
            onChange={this.handlechange} />
            <button>Add</button>
            </form>
        </div>
    )}
   
}

export default TodoForm;