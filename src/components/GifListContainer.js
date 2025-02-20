import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = 'YOUR_API_KEY';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'cats') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
      .then(response => response.json())
      .then(({ data }) => {
        const gifs = data.slice(0, 3).map(gif => {
          return {
            id: gif.id,
            url: gif.images.original.url
          };
        });
        this.setState({ gifs });
      });
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;