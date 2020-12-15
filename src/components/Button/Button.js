// import s from './Button.module.css';

// import { Component } from 'react';

const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button type="buttton" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
