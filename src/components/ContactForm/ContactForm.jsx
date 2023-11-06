import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './contact-form.module.css';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <span>Number tel:</span>
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={styles.btn} type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
