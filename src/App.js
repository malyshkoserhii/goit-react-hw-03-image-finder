import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageFinderStatus from './components/ImageFinderStatus';

class App extends Component {
  state = {
    request: null,
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  render() {
    const { request } = this.state;

    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageFinderStatus request={request} />
      </>
    );
  }
}

export default App;
