import axios from "axios";

import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "./characterTypes";

export const fetchCharacterRequest = () => {
  return {
    type: FETCH_CHARACTER_REQUEST,
  };
};
export const fetchCharacterSuccess = (characters) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};
export const fetchCharacterFailure = (error) => {
  return {
    type: FETCH_CHARACTER_FAILURE,
    payload: error,
  };
};

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharacterRequest);
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((respone) => {
        const characters = respone.data;
        dispatch(fetchCharacterSuccess(characters));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCharacterFailure(errorMsg));
      });
  };
};

export const changeFilter = (season) => {
  return {
    type: "CHANGE_FILTER",
    payload: season,
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch(fetchCharacterRequest);
    axios
      .get(`https://breakingbadapi.com/api/characters/${id}`)
      .then((respone) => {
        const character = respone.data;
        dispatch(fetchCharacterSuccess(character));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCharacterFailure(errorMsg));
      });
  };
};
