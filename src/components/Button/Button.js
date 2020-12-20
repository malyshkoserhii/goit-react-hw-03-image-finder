import { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './Button.module.css';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  // componentDidMount() {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }

  render() {
    const { onClick, text, type, icon } = this.props;

    return (
      <button type="button" className="Button" onClick={onClick}>
        {type === 'icon' ? icon : text}
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Load more',
};

export default Button;
