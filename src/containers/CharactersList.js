import React, { useEffect } from "react";
import { connect } from "react-redux";
import Character from "../components/Character";

import { fetchCharacters } from "../redux";

const CharactersList = ({ data, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);
  return data.loading ? (
    <h2>Loading text</h2>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <div>
      <h2>Users list</h2>
      <div className="all_char">
        {data.characters.map((character) => (
          <Character character={character} key={character.char_id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    data: state.characters,
  };
};

const mapDispatchToProps = {
  fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
