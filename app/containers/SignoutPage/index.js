/**
 *
 * SignoutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Icon } from 'semantic-ui-react';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { history as historyPropTypes } from 'history-prop-types';
import { setTimeout } from 'timers';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signoutRequest } from './actions';

export class SignoutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount(){
    const { history } = this.props;
    setTimeout(() => {
      this.props.dispatch(signoutRequest({ history }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>SignoutPage</title>
          <meta name="description" content="Description of SignoutPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SignoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPropTypes),
};

const mapStateToProps = createStructuredSelector({
  signoutpage: makeSelectSignoutPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signoutPage', reducer });
const withSaga = injectSaga({ key: 'signoutPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignoutPage);
