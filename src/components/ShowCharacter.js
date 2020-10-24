import React from 'react';
import PropTypes from 'prop-types';
import { ShowCharacterr } from './ShowCharacter.styled';

const ShowCharacter = ({ character }) => (
  <ShowCharacterr>
    <div className="character-wrapper">
      <div className="img-and-name">
        <img src={character.img} alt="char" width="400px" />
      </div>
      <div className="char-details">
        <h2>
          Name :
          {character.name}
        </h2>
        <h3>
          Birthday :
          {character.birthday}
        </h3>
        <h3>
          Nickname :
          {character.nickname}
        </h3>
        <h3>
          portrayed :
          {character.portrayed}
        </h3>
        <h3>
          occupation :
          {character.occupation.join('|')}
        </h3>
        <h3>
          seasons :
          {character.appearance.join('|')}
        </h3>
      </div>
    </div>
  </ShowCharacterr>
);
ShowCharacter.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number.isRequired,
    img: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    portrayed: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    appearance: PropTypes.string.isRequired,
  }).isRequired,
};
export default ShowCharacter;
