import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ShowCharacter from "../components/ShowCharacter";
import { fetchCharacter } from "../redux";

const CharcaterInfo = ({ data, fetchCharacter }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, [fetchCharacter, id]);
  let character = data.characters.filter(
    (character) => parseInt(id) === character.char_id
  );

  return data.loading ? (
    <h2>Loading text</h2>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <ShowCharacter character={character} />
  );
};

const mapStateToProps = (state) => {
  console.log(state.characters.characters);

  return {
    data: state.characters,
  };
};

const mapDispatchToProps = {
  fetchCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharcaterInfo);
