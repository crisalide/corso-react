import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';
import {PLUS, MINUS, MULTI, DIVIDE, EQUAL,} from '../config/const';
import {includes} from 'lodash';

const Button = props => {
  const classes = ['btn']

  if (includes ([PLUS, MINUS, MULTI, DIVIDE, EQUAL,], props.label)) classes.push('orange');
  return <div className={classes.join(' ')} onClick={() => props.click(props.label)}>{props.label || 'btn'}</div>;
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
