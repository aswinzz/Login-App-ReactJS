/*
 *
 * SignoutPage actions
 *
 */

import {
  SIGNOUT_ERROR,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS
} from './constants';

export function signoutRequest(data) {
  return {
    type: SIGNOUT_REQUEST,
    data,
  };
}


export function signoutSuccess() {
  return {
    type: SIGNOUT_SUCCESS,
  };
}


export function signoutError() {
  return {
    type: SIGNOUT_ERROR,
  };
}
