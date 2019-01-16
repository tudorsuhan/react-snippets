import { createAction } from 'redux-actions';
import action from './actionTypes';

const getImages = createAction(action.GET_IMAGES);
const getImagesSuccess = createAction(action.GET_IMAGES_SUCCESS);
const getImagesFailure = createAction(action.GET_IMAGES_FAILURE);

export { getImages, getImagesSuccess, getImagesFailure };
