import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    request: null,
    error: null,
    images: [],
    status: 'idle',
  };

  page = 1;

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.request;
    // console.log('prevRequest', prevRequest);

    const nextRequest = this.state.request;
    // console.log('nextRequest', nextRequest);
    // console.log(prevRequest === nextRequest);

    if (prevRequest !== nextRequest) {
      const key = '18518367-60788b25c9bdd8e2c754a390a';
      const url = `https://pixabay.com/api/?q=${nextRequest}&page=${this.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Your response about ${nextRequest} is not found`),
          );
        })
        .then(hits => this.setState({ images: hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    console.log('this.state.images', this.state.images);
  }

  handleFormSubmit = request => {
    this.setState({ request });
  };

  render() {
    return <Searchbar onSubmitForm={this.handleFormSubmit} />;
  }
}

export default App;
