import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './componets/Todos';
import AddTodo from './componets/AddTodo';
import About from './componets/pages/About';
import Header from './componets/layout/header';
// import uuid from 'uuid';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/todos",{ params: { _limit: 10} } )
    .then(res => this.setState({ todos: res.data.map(todo => {return todo}) }))
  }

  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => { 
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
     }) 
    })
  }

  deleteTodo = (id)=>{
    Axios.delete("https://jsonplaceholder.typicode.com/todos/"+id)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title)=>{
    Axios.post("https://jsonplaceholder.typicode.com/todos", {  title, completed: false  })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render(){
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                 <div className="App-header">
                   <AddTodo addTodo={this.addTodo} />
                   <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                   </div>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
