import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import ShowCharacter from '../components/ShowCharacter';
import { fetchCharacter } from '../redux';

const CharcaterInfo = ({ data, fetchCharacter }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, [fetchCharacter, id]);
  const character = data.characters.filter(
    character => parseInt(id, 10) === character.char_id,
  );
  // eslint-disable-next-line
  return data.loading ? (
    <div className="loader">Loading...</div>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    character.map(character => (
      <ShowCharacter key={character.char_id} character={character} />
    ))
  );
};

const mapStateToProps = state => ({
  data: state.characters,
});

const mapDispatchToProps = {
  fetchCharacter,
};

CharcaterInfo.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  fetchCharacter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharcaterInfo);
