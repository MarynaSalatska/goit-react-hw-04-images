import '../styles.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  handleToggleModal = e => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { image, tag, largeImage } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.handleToggleModal}
          className="ImageGalleryItem-image"
          src={image}
          alt={tag}
        />
        {this.state.isOpenModal && (
          <Modal largeImage={largeImage} closeModal={this.handleToggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
