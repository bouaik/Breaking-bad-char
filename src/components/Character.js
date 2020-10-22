import React from "react";

const Character = ({ character }) => {
  return (
    <div className="char_container">
      <p>{character.name}</p>
      <div className="img-wrapper">
        <img src={character.img} alt="img" />
      </div>
      <div>{character.appearance}</div>
      <div>{character.nickname}</div>
    </div>
  );
};

export default Character;
