import * as actionTypes from "./actionTypes";

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START,
  };
};

export const searchSuccess = (value) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    value: value,
  };
};

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL,
  };
};

export const search = (value) => {
  return (dispatch) => {
    dispatch(searchStart());
    dispatch(searchSuccess(value));
  };
};

// SEARCH RESULTS

export const searchResultStart = () => {
  return {
    type: actionTypes.SEARCH_RESULT_START,
  };
};

export const searchResultSuccess = (results) => {
  return {
    type: actionTypes.SEARCH_RESULT_SUCCESS,
    results: results,
  };
};

export const clearSearchResults = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_RESULTS,
  };
};

export const searchResult = (results) => {
  return (dispatch) => {
    dispatch(searchResultStart());
    dispatch(searchResultSuccess(results));
  };
};
