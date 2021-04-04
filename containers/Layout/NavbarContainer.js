import React, { Component } from "react";
import { withRouter } from "next/router";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

import Navbar from "../../components/Layout/Navbar";
import * as commonActions from "../../actions/commonActions";

class NavbarContainer extends Component {
  componentDidMount(){
    const points = localStorage.getItem('points')
    if(points){
      if(Number(points)>= 1000){
        alert('Parabens você atingiu 1000 pontose ganhou uma coca cola 2L');
        localStorage.removeItem('points')
      }
    }
  }

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
    } = this.props;

    return (
      <div>
    
          <Navbar
            pathname={pathname}
            actions={actions}
            handleCloseNavbar={this.handleCloseNavbar}
            localStorage={this.props.localStorage}
          />
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions }, dispatch),
});

export default compose(
  withRouter,
  connect(mapDispatchToProps)
)(NavbarContainer);
