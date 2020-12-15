import { Component } from 'react';
import Modal from '../Modal';
// import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    modalWindowImage: null,
  };

  showModal = largeImageURL => {
    this.setState({ modalWindowImage: largeImageURL });
  };

  render() {
    const { modalWindowImage } = this.state;
    const { images } = this.props;

    return (
      <>
        {images.map(({ id, largeImageURL, tags, webformatURL }) => (
          <li
            key={id}
            className="ImageGalleryItem"
            onClick={() => this.showModal(largeImageURL)}
          >
            <img
              src={webformatURL}
              alt={tags}
              className="ImageGalleryItem-image"
            />
            {modalWindowImage && (
              <Modal>
                <img src={modalWindowImage} alt={tags} />
              </Modal>
            )}
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
