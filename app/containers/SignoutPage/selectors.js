import { createSelector } from 'reselect';

/**
 * Direct selector to the signoutPage state domain
 */
const selectSignoutPageDomain = (state) => state.get('signoutPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignoutPage
 */

const makeSelectSignoutPage = () => createSelector(
  selectSignoutPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSignoutPage;
export {
  selectSignoutPageDomain,
};
