
import { fromJS } from 'immutable';
import signoutPageReducer from '../reducer';

describe('signoutPageReducer', () => {
  it('returns the initial state', () => {
    expect(signoutPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
