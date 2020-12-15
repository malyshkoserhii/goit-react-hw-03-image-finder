import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import imagesApi from './services/images-api';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    error: null,
    status: 'idle',
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

    this.setState({ status: 'pending' });

    imagesApi
      .fetchImages(options)
      .then(({ hits }) =>
        this.setState(prevState => {
          if (hits.length > 0) {
            return {
              images: [...prevState.images, ...hits],
              currentPage: prevState.currentPage + 1,
              status: 'resolved',
            };
          }
        }),
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { images, error, status } = this.state;

    return (
      <>
        <Searchbar onChangeForm={this.onChangeQuery} />
        {status === 'resolved' && (
          <>
            <ImageGallery>
              <ImageGalleryItem images={images} />
            </ImageGallery>
            <Button onClick={this.fetchImages} />
          </>
        )}
        {status === 'pending' && (
          <div className="Loader-wrapper">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={120}
              width={120}
              timeout={3000}
            />
          </div>
        )}
        {status === 'rejected' && <p>{error.message}</p>}
      </>
    );
  }
}

export default App;
