import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type,
  name,
  label,
  onChange,
  value,
  id,
  data,
  className,
}) {
  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <input
          data-testid={ data }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          className={ className }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};
