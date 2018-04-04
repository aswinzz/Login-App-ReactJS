/**
 *
 * Asynchronously loads the component for SignoutPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
