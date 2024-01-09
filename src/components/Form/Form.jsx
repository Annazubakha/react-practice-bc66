import React, { Component } from 'react';

export class Form extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.query);

    this.setState({ query: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            value={query}
            type="text"
            name="query"
            onChange={this.handleChange}
          />
        </label>
        <button>Add Todo</button>
      </form>
    );
  }
}
