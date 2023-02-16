import './styles.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Audio } from 'react-loader-spinner';
import { getAlbumsService } from 'service/service';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;

export class App extends Component {
  state = {
    albums: [],
    status: 'idle',
    page: 1,
    query: '',
    perPage: 12,
    loadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, perPage } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ status: 'LOADING' });
      try {
        const response = await getAlbumsService({ query, page, perPage });
        this.setState({
          totalHits: response.totalHits,
          albums:
            page === 1
              ? response.hits
              : [...this.state.albums, ...response.hits],
          status: 'FULFILLED',
        });
      } catch (error) {
        this.setState({ status: 'REJECTED' });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { albums, status, totalHits } = this.state;

    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />

        <ImageGallery albums={albums} totalHits={totalHits} />

        {status === 'LOADING' && <Loader />}
        {Math.floor(totalHits / this.state.perPage) > 1 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
