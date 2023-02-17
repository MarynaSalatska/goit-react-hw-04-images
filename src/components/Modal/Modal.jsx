import '../styles.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ closeModal, largeImage, alt }) {
  const onClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const onEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, [closeModal]);

  return createPortal(
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={largeImage} alt={alt} />
      </div>
    </div>,
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
