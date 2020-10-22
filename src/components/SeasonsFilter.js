import React from "react";
import PropTypes from "prop-types";

const SeasonFilter = ({ handleFilterChange }) => {
  const seasons = ["All", 1, 2, 3, 4, 5];
  return (
    <div>
      <select name="season" onChange={handleFilterChange}>
        {seasons.map((season) => (
          <option key={season}>{season}</option>
        ))}
      </select>
    </div>
  );
};
SeasonFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SeasonFilter;
