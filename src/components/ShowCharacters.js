import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShowCharacterss } from './ShowCharacters.styled';

const ShowCharacters = ({ character }) => (
  <ShowCharacterss>
    <h3>{character.name}</h3>
    <div className="img-wrapper">
      <img src={character.img} alt="img" />
    </div>
    <div className="end">
      <Link to={`/show/${character.char_id}`}>
        <button type="button">Read more</button>
      </Link>
    </div>
  </ShowCharacterss>
);

ShowCharacters.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number.isRequired,
    img: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowCharacters;
