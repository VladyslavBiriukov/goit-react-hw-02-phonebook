import PropTypes from 'prop-types';

import { Input, FilterLabel} from './Filter.styled';

const Filter = ({ filter, onChange }) => {
    return (
        <FilterLabel>
            Find contacts by name
            <Input type="text" name="filter" value={filter} onChange={onChange} />
        </FilterLabel>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;