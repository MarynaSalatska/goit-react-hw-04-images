import './styles.css';
import React, { useEffect, useState } from 'react';
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

export function App() {
  const [albums, setAlbums] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [perPage] = useState(12);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!query) return;
    async function getImg() {
      setStatus('LOADING');
      try {
        const response = await getAlbumsService(query, page, perPage);
        setAlbums(page === 1 ? response.hits : [...albums, ...response.hits]);
        setTotalHits(response.totalHits);
        setStatus('FULFILLED');
      } catch (error) {
        setStatus({ status: 'REJECTED' });
      }
    }
    getImg();
  }, [query, page, perPage]);
  
  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery albums={albums} totalHits={totalHits} />
      {status === 'LOADING' && <Loader />}
      {Math.floor(totalHits / perPage) > 1 && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
}
