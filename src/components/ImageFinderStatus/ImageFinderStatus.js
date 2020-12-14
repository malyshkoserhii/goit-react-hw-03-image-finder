import { Component } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageFinderStatus extends Component {
  state = {
    hits: [],
    error: null,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.request;
    const nextRequest = this.props.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    // const prevImages = prevState.hits;
    // console.log('prevImages', prevImages);
    // const nextImages = this.props.images;
    // console.log('nextImages', nextImages);

    if (prevRequest !== nextRequest || prevPage !== nextPage) {
      const key = '18518367-60788b25c9bdd8e2c754a390a';
      const url = `https://pixabay.com/api/?q=${nextRequest}&page=${nextPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=5`;

      this.setState({ status: 'pending' });

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Your response about ${nextRequest} is not found`),
          );
        })
        .then(({ hits }) => this.setState({ hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  render() {
    const { hits, error, status } = this.state;

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
            <ImageGalleryItem images={hits} />
          </ImageGallery>
          <Button onNextPage={this.handleNextPage} />
        </>
      );
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
  }
}

export default ImageFinderStatus;
