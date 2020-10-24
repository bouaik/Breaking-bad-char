import {
  fetchCharacterSuccess,
  fetchCharacterRequest,
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
  it('should get characters data', () => {
    const expectedAction = {
      type: 'FETCH_CHARACTER_REQUEST',
    };
    expect(fetchCharacterRequest()).toEqual(expectedAction);
  });
});
