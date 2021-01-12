import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
      constructor(){
        super();
        this.state = {
          todos: todos
        }
    }

  // this component is going to take care of state, and any change handlers you need to work with your state
  handleItemToggle = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })
    })
  }

  handleItemAdd = (itemName) => {
    const item = {
      task: itemName,
      id: this.state.todos.length,
      completed: false
    }
    const newTodos = [...this.state.todos, item];
    this.setState({
      todos: newTodos
    })
  }

  handleItemsCompleted = () => {
    const newTodos = this.state.todos.filter(item => {
      return(!item.completed);
    });
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>To-Do List</h1>
           <TodoForm handleItemAdd={this.handleItemAdd} 
           handleItemsCompleted={this.handleItemsCompleted} 
           />
         </div>
        <TodoList todos={this.state.todos} handleItemToggle={this.handleItemToggle} />
       </div>
    );
  }
}

export default App;
