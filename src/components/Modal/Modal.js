import { Component } from 'react';
import { createPortal } from 'react-dom';
// import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
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
        <div className="Modal">{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
