import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { apiURL } from '../../constants/apiURL';
import NavbarMobile from '../../components/Layout/Navbar/Mobile/NavbarMobile';
import Loading from '../../components/Loading/Loading';
import * as commonActions from '../../actions/commonActions';
import * as navbarActions from '../../actions/navbarActions';

class NavbarMobileContainer extends Component {
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

  handleCloseNavbar = () => {
    page.body.removeClass('navbar-open');
    $('.backdrop-navbar').remove();
  }

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
          <NavbarMobile
            pathname={pathname}
            navbarState={navbarState}
            handleSignOut={this.handleSignOut}
            handleCloseNavbar={this.handleCloseNavbar}
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
)(NavbarMobileContainer);