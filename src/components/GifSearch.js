import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a search term:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <button type="submit">Find Gifs</button>
      </form>
    );
  }
}

export default GifSearch;