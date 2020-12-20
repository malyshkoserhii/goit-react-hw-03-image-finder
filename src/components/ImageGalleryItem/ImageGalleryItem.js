// import PropTypes from 'prop-types';
// import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClick(image.largeImageURL, image.tags)}
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

// {
//   /* static propTypes = {
//     images: PropTypes.array.isRequired,
//   }; */
// }

export default ImageGalleryItem;
