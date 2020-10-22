import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCharacters } from "../redux";

const CharactersList = ({ data, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);
  return <div>characters list</div>;
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
