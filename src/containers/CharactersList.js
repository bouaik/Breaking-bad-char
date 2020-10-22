import React, { useEffect } from "react";
import { connect } from "react-redux";
import ShowCharacters from "../components/ShowCharacters";
import SeasonFilter from "../components/SeasonsFilter";
import { fetchCharacters, changeFilter } from "../redux";

const CharactersList = ({ data, fetchCharacters, filter, changeFilter }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  let charactersFiltred = data.characters;

  if (filter === "All") {
    charactersFiltred = data.characters;
  } else {
    charactersFiltred = charactersFiltred.filter(
      (character) =>
        character.appearance && character.appearance.includes(parseInt(filter))
    );
  }

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  return data.loading ? (
    <h2>Loading text</h2>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <div>
      <h2>Breaking bad cast</h2>
      <SeasonFilter handleFilterChange={handleFilterChange} />
      <div className="all_char">
        {charactersFiltred.map((character) => (
          <ShowCharacters character={character} key={character.char_id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    data: state.characters,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  fetchCharacters,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
