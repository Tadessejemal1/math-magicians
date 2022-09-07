import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div className="input">{text || 0 }</div>
    );
  }
}
Input.propTypes = {
  text: PropTypes.string,
};

Input.defaultProps = {
  text: '0',
};
export default Input;
