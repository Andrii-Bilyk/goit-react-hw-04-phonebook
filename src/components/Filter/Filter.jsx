import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

function Filter({ value, onChangeFilter }) {
  const handleChange = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Пошук за ім'ям"
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
