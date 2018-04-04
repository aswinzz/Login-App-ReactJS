
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Grid, Message } from 'semantic-ui-react';
import { compose } from 'redux';
import { history as historyPropTypes } from 'history-prop-types';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { signupRequest, resetError } from './actions';
import SignupForm from './SignupForm';

export class SignupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // this.props.dispatch(resetError());
  }

  submit = (values) => {
     const val = values.toObject();
     const { username, password1, password2 } = val;
     const { history } = this.props;
     this.props.dispatch(signupRequest({ username, password1, password2, history }));
    console.log(val);
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <SignupForm onSubmit={this.submit}/>
        </Grid.Column>
        {this.props.error ? this.props.error.username : null}
        {this.props.error ? this.props.error.password1 : null}
        {this.props.error ? this.props.error.non_field_errors[0] : null}
    </Grid>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  signup: PropTypes.object,
  history: PropTypes.shape(historyPropTypes),
};


function mapStateToProps(state) {
  return {
    signuppage: makeSelectSignupPage(),
    error: state.getIn(['signupPage', 'error']),
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signupPage', reducer });
const withSaga = injectSaga({ key: 'signupPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
