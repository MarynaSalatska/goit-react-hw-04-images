import '../styles.css';
import PropTypes from 'prop-types';
import React, {  useState } from 'react';
import { FcSearch } from 'react-icons/fc';

export function Searchbar (props) {
  const [query, setQuery] = useState('');
  const handleInput = e => {
    setQuery( e.target.value);
  };
  const handleFormSUbmit = e => {
    e.preventDefault();
    props.handleSubmit(query);
  };
 
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleFormSUbmit}>
          <button type="submit" className="SearchFormButton">
            <FcSearch style={{ width: 20, height: 20 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            name="name"
            value={query}
            autoFocus
            onChange={handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
