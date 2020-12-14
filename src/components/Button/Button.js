// import s from './Button.module.css';

const Button = ({ onNextPage }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button type="buttton" className="Button" onClick={onNextPage}>
      Load more
    </button>
  );
};

export default Button;
