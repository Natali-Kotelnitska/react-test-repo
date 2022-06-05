import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};
// 1 варіант
// export const Button = ({ showFilms, isShown }) => {
//   return (
//     <button type='button' onClick={showFilms}>{isShown ? "Hidefilms" : "Show films"}</button>
//   );
// };

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  // showFilms: propTypes.func.isRequired,
  // isShown: propTypes.bool.isRequired,
};
export default Button;
