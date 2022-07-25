import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter.value} onChange={onFilter} />
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
