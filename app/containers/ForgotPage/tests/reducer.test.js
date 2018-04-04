
import { fromJS } from 'immutable';
import forgotPageReducer from '../reducer';

describe('forgotPageReducer', () => {
  it('returns the initial state', () => {
    expect(forgotPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
