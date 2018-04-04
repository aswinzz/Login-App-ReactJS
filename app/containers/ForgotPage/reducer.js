/*
 *
 * ForgotPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FORGOT_SUCCESS,
  FORGOT_ERROR,
  FORGOT_REQUEST
} from './constants';

const initialState = fromJS({});

function forgotPageReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_ERROR:
      return state;

    case FORGOT_SUCCESS:
      return state;

    case FORGOT_REQUEST:
      return state;
      
    default:
      return state;
  }
}

export default forgotPageReducer;
