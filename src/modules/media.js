import { createAction, handleActions } from 'redux-actions';

const SHOW = 'media/SHOW';
const HIDE = 'media/HIDE';

export const show = createAction(SHOW, (media) => media);
export const hide = createAction(HIDE, (media) => media);

const initialState = {
  visibility: '',
};

const media = handleActions(
  {
    [SHOW]: (state, action) => ({
      ...state,
      visibility: 'true',
    }),
    [HIDE]: (state, action) => ({
      ...state,
      visibility: '',
    }),
  },
  initialState
);

export default media;
