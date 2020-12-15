import { Component } from 'react';
// import s from './Button.module.css';

class Button extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <button type="buttton" className="Button" onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
