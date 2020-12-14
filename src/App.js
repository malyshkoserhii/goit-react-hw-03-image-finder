import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
// import ImageFinderStatus from './components/ImageFinderStatus';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';

import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  handleFormSubmit = request => {
    this.setState({ request });
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const key = '18518367-60788b25c9bdd8e2c754a390a';
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=5`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`Your response about ${searchQuery} is not found`),
        );
      })
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
          // status: 'resolved',
        })),
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onChangeForm={this.onChangeQuery} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        <Button onClick={this.fetchImages} />
        {/* <ImageFinderStatus request={request} /> */}
      </>
    );
  }
}

export default App;
