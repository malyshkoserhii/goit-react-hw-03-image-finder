// import s from './Button.module.css';

const Button = ({ onNextPage }) => {
  return (
    <button type="buttton" className="Button" onClick={onNextPage}>
      Load more
    </button>
  );
};

export default Button;
