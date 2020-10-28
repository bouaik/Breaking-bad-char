import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCharacters from '../components/ShowCharacters';
import SeasonFilter from '../components/SeasonsFilter';
import { fetchCharacters, changeFilter } from '../redux';
import { CharacterList } from './CharacterList.styled';

const CharactersList = ({
  data, fetchCharacters, filter, changeFilter,
}) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  let charactersFiltred = data.characters;

  if (filter === 'All') {
    charactersFiltred = data.characters;
  } else {
    charactersFiltred = charactersFiltred.filter(
      character => character.appearance
        && character.appearance.includes(parseInt(filter, 10)),
    );
  }

  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };
  // eslint-disable-next-line
  return data.loading ? (
    <div className="loader">Loading...</div>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <div>
      <SeasonFilter handleFilterChange={handleFilterChange} />
      <CharacterList>
        {charactersFiltred.map(character => (
          <ShowCharacters character={character} key={character.char_id} />
        ))}
      </CharacterList>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.characters,
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchCharacters,
  changeFilter,
};

CharactersList.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
