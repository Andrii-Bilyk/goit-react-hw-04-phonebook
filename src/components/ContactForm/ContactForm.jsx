import React from 'react';
import PropTypes from 'prop-types';
import styles from './contact-form.module.css'

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleChange}
        />
        <span>Number tel:</span>
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={this.handleChange}
        />
        <button className={styles.btn} type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;