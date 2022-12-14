import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, className, clickHandler } = props;
  return (
    <button
      onClick={() => clickHandler(name)}
      className={className}
      type="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
  className: 'btn',
};

export default Button;
