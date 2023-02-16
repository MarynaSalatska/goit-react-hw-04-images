import '../styles.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleInput = event => {
    this.setState({ query: event.target.value });
  };
  handleFormSUbmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleFormSUbmit}>
          <button type="submit" className="SearchFormButton">
            <FcSearch style={{ width: 20, height: 20 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            name="name"
            value={this.state.name}
            autoFocus
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
