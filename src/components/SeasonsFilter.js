import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from './filter.styled';

const SeasonFilter = ({ handleFilterChange }) => {
  const seasons = ['All', 1, 2, 3, 4, 5];
  return (
    <Filter>
      <h3>Filter Characters By Season : </h3>
      <select name="season" onChange={handleFilterChange}>
        {seasons.map(season => (
          <option key={season}>{season}</option>
        ))}
      </select>
    </Filter>
  );
};
SeasonFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SeasonFilter;
