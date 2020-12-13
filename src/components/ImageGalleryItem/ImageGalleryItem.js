// import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt="pixabay_image"
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
