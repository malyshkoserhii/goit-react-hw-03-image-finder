import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
// import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    modalWindowImage: null,
    alt: null,
  };

  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  showModal = (largeImageURL, tags) => {
    this.setState({
      modalWindowImage: largeImageURL,
      alt: tags,
    });
  };

  onCloseModal = () => {
    this.setState({
      modalWindowImage: null,
      alt: null,
    });
  };

  render() {
    const { modalWindowImage, alt } = this.state;
    const { images } = this.props;

    return (
      <>
        {images.map(({ id, largeImageURL, tags, webformatURL }) => (
          <li
            key={id}
            className="ImageGalleryItem"
            onClick={() => this.showModal(largeImageURL, tags)}
          >
            <img
              src={webformatURL}
              alt={tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
        {modalWindowImage && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={modalWindowImage} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
