import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import Search from './components/search';
const mydata = [{
  id:'',
  name:'',
  completed:false
}];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      data:mydata
    }
  }
  addNew = (text)=>{
    const newItem = {
      id:Date.now(),
      name:text,
      completed:false
    };
    this.setState({
      data:[...this.state.data,newItem]
    })
  }
  toggleItem =(itemId)=>{
   const newtoggle= this.state.data.map((e)=>{
     if (e.id===itemId){
       return {
         ...e,
         completed:!e.completed
       };
     }else{
       return e;
     }
   });
   this.setState({
     data:newtoggle
   });
  }
  removeItem = (e)=>{
   e.preventDefault();
   this.setState({
     data:this.state.data.filter(item=>item.completed===false)
   })
  }
 
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <Search data={this.state.data}/>
        <TodoForm addNew={this.addNew}/>
        <TodoList data={this.state.data} toggleItem={this.toggleItem} removeItem={this.removeItem}/>
        <br />
        <div className='circle'>picture</div>
      </div>
    );
  }
}

export default App;
