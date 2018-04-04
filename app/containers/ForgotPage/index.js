/**
 *
 * ForgotPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Message } from 'semantic-ui-react';
import { history as historyPropTypes } from 'history-prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForgotPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { forgotRequest } from './actions';
import ForgotForm from './ForgotForm';

export class ForgotPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  submit = (values) => {
    const val = values.toObject();
    const { email } = val;
    const { history } = this.props;
    this.props.dispatch(forgotRequest({ email, history }));
   console.log(val);
 }

  
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <ForgotForm onSubmit={this.submit}/>
        </Grid.Column>
      </Grid>
    );
  }
}

ForgotPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  forgot: PropTypes.object,
  history: PropTypes.shape(historyPropTypes),
};

const mapStateToProps = createStructuredSelector({
  forgotpage: makeSelectForgotPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgotPage', reducer });
const withSaga = injectSaga({ key: 'forgotPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPage);
