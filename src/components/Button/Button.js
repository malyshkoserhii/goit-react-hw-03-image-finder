import { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './Button.module.css';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

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
