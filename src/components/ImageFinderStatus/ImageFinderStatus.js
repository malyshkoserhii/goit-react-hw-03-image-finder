import { Component } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageFinderStatus extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    error: null,
    status: 'idle',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevRequest = prevProps.request;
  //   const nextRequest = this.props.request;
  //   console.log(nextRequest);

  //   if (prevRequest !== nextRequest) {
  //     this.setState({ query: nextRequest });
  //     this.fetchImages(nextRequest);
  //   }
  // }

  fetchImages = query => {
    query = this.state.query;

    const { page } = this.state;

    const key = '18518367-60788b25c9bdd8e2c754a390a';
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=5`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`Your response about ${query} is not found`),
        );
      })
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          status: 'resolved',
        })),
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div></div>;
    }

    if (status === 'pending') {
      return (
        <div className="Loader-wrapper">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={120}
            width={120}
            timeout={3000}
          />
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery>
            <ImageGalleryItem images={images} />
          </ImageGallery>
          <Button onFetch={this.fetchImages} />
        </>
      );
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
  }
}

export default ImageFinderStatus;
