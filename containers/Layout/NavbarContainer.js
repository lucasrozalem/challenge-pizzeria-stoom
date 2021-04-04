import React, { Component } from "react";
import { withRouter } from "next/router";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

import Navbar from "../../components/Layout/Navbar";
import * as commonActions from "../../actions/commonActions";
import * as navbarActions from "../../actions/navbarActions";

class NavbarContainer extends Component {
  handleSignOut = () => {
    localStorage.clear();
    this.props.actions.resetInitialState();
    location.reload();
  };

  handleCloseNavbar = () => {
    page.body.removeClass("navbar-open");
    $(".backdrop-navbar").remove();
  };

  render() {
    const {
      router: { pathname },
      actions,
      navbarState,
    } = this.props;

    return (
      <div>
        {!navbarState.loadingNavbar && (
          <Navbar
            pathname={pathname}
            actions={actions}
            navbarState={navbarState}
            handleCloseNavbar={this.handleCloseNavbar}
            localStorage={this.props.localStorage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ navbarReducer }) => ({ navbarState: navbarReducer });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions, ...navbarActions }, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavbarContainer);
