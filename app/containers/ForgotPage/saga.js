import { call, put, take, fork } from 'redux-saga/effects';
import 'whatwg-fetch';

import {
  FORGOT_REQUEST,
  FORGOT_SUCCESS,
  FORGOT_ERROR,
  URL,
} from './constants';




function checkStatus(response) {
  // if (response.status >= 200 && response.status < 300) {
  //   return response;
  // }
  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
  return response;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  // const error = new Error(response.statusText);
  // error.response = response.json();
  // throw error;
  return response.json();
}


function* forgot() {
  while(true){
    const request = yield take(FORGOT_REQUEST);
    const {email,history} = request.data;
    console.log("email ",email);
    yield call(authorize , {email,history});
  }
}

function sendRequest({ email }) {
  // console.log(username, password, 'test');
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  }).then(checkStatus).then(parseJSON);
}

function* authorize({email,history}){
  try{
    const response = yield call(sendRequest,{email});
    console.log(response);
    if(response){
      const ForgotSuccessResponse = yield put({type: FORGOT_SUCCESS});
      if(ForgotSuccessResponse){
        yield call(forwardTo,history,'/home')
      }
    }
    else{
      console.log("error");
    }
  }
  catch (e) {
    yield put({ type: FORGOT_ERROR, error: e.message });
  } 
}

function forwardTo(history,location){
  history.push({
    pathname: location,
    state:{
      message:'ForgotSuccess',
    },
  });
}


// Individual exports for testing
export default function* defaultSaga() {
 yield fork(forgot);
}
