import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import { FaBeer } from 'react-icons/fa';
// import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOnBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleOnBackdropClick}>
        <div className="Modal">
          <Button
            type="icon"
            onClick={this.handleOnBackdropClick}
            icon={<FaBeer />}
          />
          {children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.defaultProps = {
  children: <div></div>,
};

export default Modal;
