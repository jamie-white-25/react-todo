import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class header extends Component {
    render() {
        return (
            <header className="bg-dark text-white p-3">
                <h1 className="m-0">Todo list</h1>
                <Link to="/" className="text-white">Home</Link> | <Link className="text-white" to="/about">About</Link>
            </header>
        )
    }
}

export default header
