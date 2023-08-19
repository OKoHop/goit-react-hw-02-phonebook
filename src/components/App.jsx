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
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contact!`);
    }
    this.setState(prevstate => {
      return {
        contacts: [...prevstate.contacts, newContact],
      };
    });
  };

  filterChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = idContact => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <AddContact onAdd={this.addContact} />
        <ContactList
          title="Contacts"
          contacts={filtredContacts}
          filter={filter}
          onChange={this.filterChange}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </div>
    );
  }
}
