import React from "react";
import PropTypes from "prop-types";

const ShowCharacter = ({ character }) => {
  return (
    <div>
      {character.map((character) => (
        <div key={character.char_id}>
          <h2>{character.name}</h2>
          <img src={character.img} alt="char" width="400px" />
        </div>
      ))}
    </div>
  );
};
ShowCharacter.propTypes = {
  character: PropTypes.array.isRequired,
};
export default ShowCharacter;
