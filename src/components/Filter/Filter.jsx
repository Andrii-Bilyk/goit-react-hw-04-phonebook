import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css'

class Filter extends React.Component {
  handleChange = (e) => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    const { value } = this.props;

    return (
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={this.handleChange}
        placeholder="Пошук за ім'ям"
      />
    );
  }
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
  };

export default Filter;