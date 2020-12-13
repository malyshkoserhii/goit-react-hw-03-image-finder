import { Component } from 'react';

import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageFinderStatus extends Component {
  state = {
    error: null,
    images: [],
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.request;
    const nextRequest = this.props.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevRequest !== nextRequest || prevPage !== nextPage) {
      const key = '18518367-60788b25c9bdd8e2c754a390a';
      const url = `https://pixabay.com/api/?q=${nextRequest}&page=${nextPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=5`;

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Your response about ${nextRequest} is not found`),
          );
        })
        .then(({ hits }) => this.setState({ images: hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleNextPage = () => {
    this.setState(prevPage => ({ page: prevPage.page + 1 }));
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        <Button onNextPage={this.handleNextPage} />
      </>
    );
  }
}

export default ImageFinderStatus;
