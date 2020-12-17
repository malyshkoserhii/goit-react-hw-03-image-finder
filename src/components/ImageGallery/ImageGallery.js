import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
// import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
};

ImageGallery.protoTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
