import { createSelector } from 'reselect';

/**
 * Direct selector to the forgotPage state domain
 */
const selectForgotPageDomain = (state) => state.get('forgotPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgotPage
 */

const makeSelectForgotPage = () => createSelector(
  selectForgotPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectForgotPage;
export {
  selectForgotPageDomain,
};
