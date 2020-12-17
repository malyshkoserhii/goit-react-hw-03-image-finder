import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import imagesApi from './services/images-api';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(({ hits }) =>
        this.setState(prevState => {
          if (hits.length > 0) {
            return {
              images: [...prevState.images, ...hits],
              currentPage: prevState.currentPage + 1,
            };
          }
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, error, isLoading } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onChangeForm={this.onChangeQuery} />
        {error && <p>{error.message}</p>}

        <ImageGallery images={images} />

        {isLoading && (
          <div className="Loader-wrapper ">
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          </div>
        )}

        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default App;
