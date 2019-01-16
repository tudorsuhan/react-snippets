import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  imagesList: [],
  isLoading: false,
  isError: false,
};

export const getImages = state => ({
  ...state,
  isLoading: true,
});

export const getImagesSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    imagesList: action.payload,
  };
};

export const getImagesFailure = state => ({
  ...state,
  isLoading: false,
  isError: true,
});

export default handleActions(
  {
    [actions.getImages]: getImages,
    [actions.getImagesSuccess]: getImagesSuccess,
    [actions.getImagesFailure]: getImagesFailure,
  },
  initialState,
);
