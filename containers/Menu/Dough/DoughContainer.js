import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";
import React, { Component } from "react";

import * as commonActions from "../../../actions/commonActions";
import * as doughActions from "../../../actions/doughActions";
import Dough from "../../../components/Menu/Dough/Dough";

class DoughContainer extends Component {
  componentDidMount() {
    const { router, actions } = this.props;
    const dough = localStorage.getItem("dough");
    const priceDough = localStorage.getItem("priceDough");
    const name = localStorage.getItem("name");
    const description = localStorage.getItem("description");
    const size = localStorage.getItem("size");
    const priceSize = localStorage.getItem("priceSize");
    const priceFlavor = localStorage.getItem("priceFlavor");
    const total = localStorage.getItem("total");

    let totalPrice = Number(total) + Number(priceSize) + Number(priceDough) + Number(priceFlavor);
    async function setState(){
     if (localStorage.dough) {
      await actions.handleSetInitialValue({
          dough: dough,
          priceDough: priceDough ? Number(priceDough): 0,
          description: description ? description : "",
          name: name ? name : "",
          size: size ? size : "",
          priceSize: priceSize ? Number(priceSize) : 0,
          total: totalPrice ? Number(totalPrice) : 0,
          priceFlavor: priceFlavor ? Number(priceFlavor) : "",
        });
      }
    }

    setState();
    
  }

  handleNextStep = (price) => {
    const { router, actions, doughState } = this.props;
    console.log("price 2", price);
    if (doughState.selectedDough) {
      localStorage.setItem("dough", doughState.selectedDough);
      localStorage.setItem("priceDough", doughState.priceDough);
      localStorage.setItem('price', price)
    }
  };

  render() {
    const { actions, doughState } = this.props;
    console.log("doughState", doughState);
    return (
      <div>
        {
          <Dough
            actions={actions}
            doughState={doughState}
            handleNextStep={this.handleNextStep}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ doughReducer }) => ({ doughState: doughReducer });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions, ...doughActions }, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DoughContainer);
