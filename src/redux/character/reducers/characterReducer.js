import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from '../characterTypes';

const initialState = {
  loading: true,
  characters: [],
  error: '',
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        loading: false,
        characters: action.payload,
        error: '',
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        loading: false,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default characterReducer;
