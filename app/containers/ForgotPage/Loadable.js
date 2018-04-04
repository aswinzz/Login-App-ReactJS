/**
 *
 * Asynchronously loads the component for ForgotPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
