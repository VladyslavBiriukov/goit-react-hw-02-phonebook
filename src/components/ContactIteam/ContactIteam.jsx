import PropTypes from 'prop-types';

import { ListItem, Button } from './ContactIteam.styled';

const ContactItem = ({ id, name, number, onClick }) => {
    return (
        <ListItem key={id}>
            <p>
                {name}: {number}
            </p>
            <Button type="button" onClick={() => onClick(id)}>
                Delete
            </Button>
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ContactItem;