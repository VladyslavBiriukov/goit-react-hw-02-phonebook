import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Button, Input, Label } from './ContactForm.styled';

class ContactForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handelSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        placeholder="Enter your name..."
                        onChange={this.handleChange}
                    />
                </Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        placeholder="Enter your number..."
                        onChange={this.handleChange}
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </form>
        );
    };
};

export default ContactForm;