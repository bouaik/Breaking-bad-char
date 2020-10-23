import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    <div className="loader">Loading...</div>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <ShowCharacter character={character} />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.characters,
  };
};

const mapDispatchToProps = {
  fetchCharacter,
};

CharcaterInfo.propTypes = {
  data: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharcaterInfo);
