import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

const Button = props => {
  const classes = ['btn']

  if (props.orange) classes.push('orange');
  return <div className={classes.join(' ')} onClick={() => props.click(props.label)}>{props.label || 'btn'}</div>;
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
