import { Component } from 'react';
import { createPortal } from 'react-dom';
// import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    const { children } = this.props;

    return createPortal(
      <div className="Overlay">
        <div className="Modal">{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
