import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";
import React, { Component } from "react";


import * as commonActions from "../../../actions/commonActions";
import * as flavorActions from "../../../actions/flavorActions";
import Flavor from "../../../components/Menu/Flavor/Flavor";

class FlavorContainer extends Component {
  
  componentDidMount() {
    const { router, actions } = this.props;
    const dough = localStorage.getItem('dough');
    const priceDough = localStorage.getItem('priceDough');
    const name = localStorage.getItem('name');
    const description = localStorage.getItem('description');
    const size = localStorage.getItem('size');
    const priceSize = localStorage.getItem('priceSize');
    const priceFlavor = localStorage.getItem('priceFlavor');
    const total = localStorage.getItem('total');
  
    let totalPrice = total + priceSize + priceDough + priceFlavor
      if(localStorage.dough){
      actions.handleSetInitialValue({
        dough: dough,
        priceDough: Number(priceDough),
        description: description ? description : "",
        name: name ? name : "",
        size: size ? size : "",
        priceSize: priceSize ? Number(priceSize) : 0,
        total: total ? Number(total) : 0,
        priceFlavor: priceFlavor ? Number(priceFlavor) : "",
        
      
      })
    }
  }

  handleNextStep = (price) => {
    const { router, actions, flavorState } = this.props;

    if (flavorState.selectedFlavor) {
      localStorage.setItem("size", flavorState.selectedSize);
      localStorage.setItem("priceSize", flavorState.priceSize);
      localStorage.setItem('total', price)
    }
  };

  render() {
    const { actions, flavorState } = this.props;
    console.log("flavorState", flavorState);

    return (
      <div>
        {
          <Flavor
            actions={actions}
            flavorState={flavorState}
            handleNextStep={this.handleNextStep}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ flavorReducer }) => ({ flavorState: flavorReducer });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions, ...flavorActions }, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FlavorContainer);
