import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(){
    super()
      this.state = {
        inputValue: ''
      }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleItemsCompleted();
    };

    handleChanges = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    // add in user input & reset input to original blank state
    console.log(this.state.inputValue)
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
      inputValue:''
    })
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChanges} type="text" task="item" />
        <button>Add Todo</button>
        <button onClick={this.handleClick} className="clear-btn">
        Clear Completed
      </button>
      </form>
    </div>
    );
  }
}

export default TodoForm;