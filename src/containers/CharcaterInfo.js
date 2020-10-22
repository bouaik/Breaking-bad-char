import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../redux";

const CharcaterInfo = ({ data, fetchCharacter }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, [fetchCharacter, id]);

  return <div>hello character {id}</div>;
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
