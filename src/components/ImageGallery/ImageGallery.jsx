import '../styles.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ albums }) {
  return (
    <ul className="ImageGallery">
      {albums &&
        albums.map(hit => (
          <ImageGalleryItem
            key={hit.id}
            image={hit.webformatURL}
            largeImage={hit.largeImageURL}
            tag={hit.tags}
          />
        ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
