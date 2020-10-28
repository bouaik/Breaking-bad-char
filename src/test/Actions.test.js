import {
  fetchCharacterSuccess,
  fetchCharacterRequest,
  fetchCharacterFailure,
} from '../redux/character/characterActions';

describe('actions', () => {
  it('should get characters data', () => {
    const data = [
      { char_id: 1, name: 'lhousaine' },
      { char_id: 2, name: 'bouaik' },
    ];
    const expectedAction = {
      type: 'FETCH_CHARACTER_SUCCESS',
      payload: data,
    };
    expect(fetchCharacterSuccess(data)).toEqual(expectedAction);
  });

  it('should request for data', () => {
    const expectedAction = {
      type: 'FETCH_CHARACTER_REQUEST',
    };
    expect(fetchCharacterRequest()).toEqual(expectedAction);
  });

  it('should return error when data is bot etched', () => {
    const error = 'error while fetching data';
    const expectedAction = {
      type: 'FETCH_CHARACTER_FAILURE',
      payload: error,
    };
    expect(fetchCharacterFailure(error)).toEqual(expectedAction);
  });
});
