import { createAction, handleActions } from 'redux-actions';

const ABOUT = 'height/ABOUT';
const SKILLS = 'height/SKILLS';
const PROJECTS = 'height/PROJECTS';
const CONTACT = 'height/CONTACT';

export const about = createAction(ABOUT, (height) => height);
export const skills = createAction(SKILLS, (height) => height);
export const projects = createAction(PROJECTS, (height) => height);
export const contact = createAction(CONTACT, (height) => height);

const initialState = {
  main: 0,
  about: 0,
  skills: 0,
  projects: 0,
  contact: 0,
};

const height = handleActions(
  {
    [ABOUT]: (state, action) => ({
      ...state,
      about: action.payload,
    }),
    [SKILLS]: (state, action) => ({
      ...state,
      skills: action.payload,
    }),
    [PROJECTS]: (state, action) => ({
      ...state,
      projects: action.payload,
    }),
    [CONTACT]: (state, action) => ({
      ...state,
      contact: action.payload,
    }),
  },
  initialState
);

export default height;
