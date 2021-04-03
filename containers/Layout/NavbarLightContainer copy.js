import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { apiURL } from '../../constants/apiURL';
import Navbar from '../../components/Layout/NavbarLight';
import Loading from '../../components/Loading/Loading';
import * as commonActions from '../../actions/commonActions';
import * as navbarActions from '../../actions/navbarActions';

class NavbarLightContainer extends Component {

  componentDidMount() {

    const {
      actions: {
        handleSetValuesNavbar,
        resetInitialState,
        handleLoadingRequestNavbar,
        handleErrorRequestNavbar
      }
    } = this.props;

    handleLoadingRequestNavbar();

    if(localStorage.token) {
      try {
        axios({
          method: 'get',
          url: `${apiURL}/api/customers/verify-customer`,
          headers: { 'x-auth': localStorage.token, email: localStorage.email }
        })
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            handleSetValuesNavbar({name: localStorage.name, email: localStorage.email});
          })
          .catch(() => {
            handleErrorRequestNavbar();
          });
      } catch {
        handleErrorRequestNavbar();
      }
    } else {
      resetInitialState();
    }
  }

  handleSignOut = () => {
    localStorage.clear();
    this.props.actions.resetInitialState();
    location.reload();
  };

  render() {
    const {
      router: {
        pathname
      },
      navbarState
    } = this.props;
  
    return(
      <div>
        {
          navbarState.loadingNavbar &&
          <Loading/>
        }
        {
          !navbarState.loadingNavbar &&
          <Navbar
            pathname={pathname}
            navbarState={navbarState}
            handleSignOut={this.handleSignOut}
          />
        }
      </div>
    );
  }
};

const mapStateToProps = ({ navbarReducer }) => ({ navbarState: navbarReducer });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions, ...navbarActions }, dispatch)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavbarLightContainer);