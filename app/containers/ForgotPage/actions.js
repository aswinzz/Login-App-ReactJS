/*
 *
 * ForgotPage actions
 *
 */

import {
  FORGOT_ERROR,
  FORGOT_REQUEST,
  FORGOT_SUCCESS
} from './constants';

export function forgotRequest(data) {
  return {
    type: FORGOT_REQUEST,
    data
  };
}

export function forgotSuccess() {
  return {
    type: FORGOT_SUCCESS,
  };
}

export function forgotError() {
  return {
    type: FORGOT_ERROR,
  };
}
