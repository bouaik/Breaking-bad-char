import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShowCharacters = ({ character }) => {
  return (
    <div className="char_container">
      <p>{character.name}</p>
      <div className="img-wrapper">
        <img src={character.img} alt="img" />
      </div>
      <div>{character.appearance}</div>
      <div>{character.nickname}</div>
      <Link to={`/show/${character.char_id}`}>Read more</Link>
    </div>
  );
};

ShowCharacters.propTypes = {
  character: PropTypes.object.isRequired,
};

export default ShowCharacters;
