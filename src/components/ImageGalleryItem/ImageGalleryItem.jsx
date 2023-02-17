import '../styles.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export function ImageGalleryItem({ image, tags, largeImage }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={handleToggleModal}
        className="ImageGalleryItem-image"
        src={image}
        alt={tags}
      />
      {isOpenModal && (
        <Modal
          largeImage={largeImage}
          alt={tags}
          closeModal={handleToggleModal}
        />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
