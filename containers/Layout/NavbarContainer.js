import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';


import Navbar from '../../components/Layout/Navbar';
import Loading from '../../components/Loading/Loading';
import * as commonActions from '../../actions/commonActions';
import * as navbarActions from '../../actions/navbarActions';

class NavbarContainer extends Component {
  componentDidMount() {
    const { token } = localStorage;
    const {
      actions: {
        handleSetValuesNavbar,
        resetInitialState,
        handleLoadingRequestNavbar,
        handleErrorRequestNavbar
      }
    } = this.props;

    //('this.props =>', this.props)

    //handleLoadingRequestNavbar();

  //   if (token) {
  //     try {
  //       axios({
  //         method: 'get',
  //         url: `${apiURL}/api/customers/verify-customer`,
  //         headers: { 'x-auth': localStorage.token, email: localStorage.email }
  //       })
  //         .then((res) => {
  //           localStorage.setItem('token', res.data.token);
  //           handleSetValuesNavbar({ name: localStorage.name, email: localStorage.email });

  //         })
  //         .catch(() => {
  //           handleErrorRequestNavbar();
  //         });
  //     } catch {
  //       handleErrorRequestNavbar();
  //     }
  //   } else {
  //     resetInitialState();
  //   }
  // 
}



  handleSignOut = () => {
    localStorage.clear();
    this.props.actions.resetInitialState();
    location.reload();
  };

  handleCloseNavbar = () => {
    page.body.removeClass('navbar-open');
    $('.backdrop-navbar').remove();
  };




  render() {
    const {
      router: {
        pathname
      },
      actions,
      navbarState,
      
    } = this.props;
    


    return (
      <div>
        {
          !navbarState.loadingNavbar &&
          <Navbar
            pathname={pathname}
            actions={actions}
            navbarState={navbarState}
            handleSignOut={this.handleSignOut}
            handleCloseNavbar={this.handleCloseNavbar}
           localStorage={this.props.localStorage}
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
)(NavbarContainer);

