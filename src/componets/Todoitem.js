import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = ()=>{
        return{
            textDecoration: this.props.todo.completed ? 'line-through': 'none',
        }
    }

    markComplete = (e) =>{

    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div className="d-flex" style={this.getStyle()}>
                <input className="my-auto mr-2" type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <p>{title}</p>
                <button type="button" className="btn btn-warning ml-2 my-auto rounded-circle" onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}



export default Todoitem

