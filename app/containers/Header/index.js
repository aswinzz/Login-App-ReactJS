
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log("state",this.state);
    return (
      <div>
      {this.props.isAuthenticated ? null: <Link to="/login"> Login</Link>}
      {this.props.isAuthenticated ? null: <Link to="/signup"> Register</Link>}
      {this.props.isAuthenticated ? <Link to="/logout"> Logout</Link> : null}
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  console.log("map",state);
  return {
    isAuthenticated: state.getIn(['global', 'isAuthenticated']),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Header);
