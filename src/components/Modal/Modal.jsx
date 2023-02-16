import '../styles.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  onClose = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }
  render() {
    const { id, largeImage, tag } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.onClose}>
        <div className="Modal" key={id}>
          <img src={largeImage} alt={tag} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
