import React from "react";

const Character = ({ character }) => {
  return (
    <div className="char_container">
      <p>{character.name}</p>
      <img src={character.img} width="100px" alt="img" />
      <div>{character.appearance}</div>
      <div>{character.nickname}</div>
    </div>
  );
};

export default Character;
