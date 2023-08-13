import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

class PhonebookPage extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    this.setState({ contacts: { name: evt.target.value, id: nanoid() } });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log();
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul></ul>
      </div>
    );
  }
}

export default PhonebookPage;
