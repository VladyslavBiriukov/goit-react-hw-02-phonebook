import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

import { ContactsTitle, Container, Title } from './App.styled';


class App extends Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = ({ name, number }) => {
        const normalizedFind = name.toLowerCase();
        const findName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFind);

        if (findName) {
            return alert(`${name} is already in contacts.`);
        }

        this.setState(({ contacts }) => ({
            contacts: [{ name, number, id: nanoid() }, ...contacts],
        }));
        
    };

    getContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFind = filter.toLowerCase();

        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFind));
    };


    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }));
    };

    handleFilter = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getContacts();

        return (
            <Container>
                <section title="Phonebook">
                    <Title>Phonebook</Title>
                    <ContactForm onSubmit={this.addContact} />
                </section>
                <section title="Contacts">
                    <ContactsTitle>Contacts</ContactsTitle>
                    <Filter value={filter} onChange={this.handleFilter} />
                    <ContactList
                        contacts={visibleContacts}
                        onDeleteContact={this.deleteContact}
                    />
                </section>
            </Container>
        );
    };
    
};

export default App;

