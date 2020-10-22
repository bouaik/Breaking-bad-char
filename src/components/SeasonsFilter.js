import React from "react";

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

export default SeasonFilter;
