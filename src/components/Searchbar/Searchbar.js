import { Component } from 'react';
// import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleRequest = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { search } = this.state;
    this.props.onSubmitForm(search);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleRequest}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
