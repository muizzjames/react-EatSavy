import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
//   spinnerVisible: false,
//   coord: null,
});
// const spinnerVisible = (state, action) => ({
//   ...state,
//   spinnerVisible: action.spinnerVisible,
// });
// const setCoord = (state, action) => ({
//   ...state,
//   coord: action.coord,
// });
//
const actionHandlers = {
//   [Types.SET_SPINNER_VISIBLE]: spinnerVisible,
//   [Types.SET_LOCATION]: setCoord,
};
export default createReducer(initialState, actionHandlers);
