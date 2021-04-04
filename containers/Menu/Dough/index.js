import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import React, { Component } from "react";

import * as commonActions from "../../../actions/commonActions";
import * as doughActions from "../../../actions/doughActions";
import Dough from "../../../components/Menu/Dough/index";

class DoughContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;
    let dough = localStorage.getItem("dough");
    let priceDough = localStorage.getItem("priceDough");
    let flavor = localStorage.getItem("flavor");
    let description = localStorage.getItem("description");
    let size = localStorage.getItem("size");
    let priceSize = localStorage.getItem("priceSize");
    let priceFlavor = localStorage.getItem("priceFlavor");
    let total = localStorage.getItem("total");
   
    actions.handleSetInitialValue({
      dough: dough ? dough : "",
      priceDough: priceDough ? Number(priceDough) : 0,
      description: description ? description : "",
      flavor: flavor ? flavor : "",
      size: size ? size : "",
      priceSize: priceSize ? Number(priceSize) : 0,
      total: total ? Number(total) : 0,
      priceFlavor: priceFlavor ? Number(priceFlavor) : 0,
    });
  }

  
  handleSetDoughAndPriceDoughLocal = (price) => {
    const { doughState } = this.props;
    localStorage.removeItem("dough");
    localStorage.removeItem("priceDough");
    localStorage.removeItem("total");
    if (doughState.selectedDough != "") {
      console.log('entrou nesse 1')
      localStorage.setItem("dough", doughState.dough.toString());
      localStorage.setItem("priceDough", doughState.priceDough);
      localStorage.setItem("total", price.toString());
    }
  };

  handleUncheckDough = (price) => {
    const { actions } = this.props;

    localStorage.removeItem("dough");
    localStorage.removeItem("priceDough");
    localStorage.setItem("total", price);

    actions.handleResetCheckboxDough();
  };

  render() {
    const { actions, doughState } = this.props;
    console.log('masas',doughState)
    return (
      <div>
        {
          <Dough
            actions={actions}
            doughState={doughState}
            handleSetDoughAndPriceDoughLocal={this.handleSetDoughAndPriceDoughLocal}
            handleUncheckDough={this.handleUncheckDough}
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
