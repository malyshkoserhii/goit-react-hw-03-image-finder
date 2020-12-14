// import s from './Button.module.css';

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
