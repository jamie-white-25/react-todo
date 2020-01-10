import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
    }

    getTodo = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    submitTodo = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.submitTodo} className="mb-4">
                <div className="form-group">
                  <label for="#addtodos"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="addtodos"
                    aria-describedby="helpId"
                    placeholder="add a todo"
                    value={this.state.title}
                    onChange={this.getTodo}
                   />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.array.isRequired,
}

export default AddTodo
