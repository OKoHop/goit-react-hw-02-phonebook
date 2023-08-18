import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevstate => {
      return {
        contacts: [...prevstate.contacts, newContact],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <AddContact onAdd={this.addContact} />
        <ContactList title="Contacts" contacts={contacts} />
        <GlobalStyle />
      </>
    );
  }
}
