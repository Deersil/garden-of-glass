import { createReducer } from 'redux-act';
import { logout } from './actions';

const initialState = {
  authentificated: false
};

export default createReducer(
  {
    [logout.success]: (state, payload) => ({
      ...state,
      authentificated: false
    })
  },
  initialState
);
