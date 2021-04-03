import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";
import React, { Component } from "react";


import * as commonActions from "../../../actions/commonActions";
import * as sizeActions from "../../../actions/sizeActions";
import Size from "../../../components/Menu/Size/index";

class SizeContainer extends Component {
  
  componentDidMount() {
    const { router, actions } = this.props;
    const dough = localStorage.getItem('dough');
    const priceDough = localStorage.getItem('priceDough');
    const flavor = localStorage.getItem('flavor');
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
        flavor: flavor ? flavor : "",
        size: size ? size : "",
        priceSize: priceSize ? Number(priceSize) : 0,
        total: total ? Number(total) : 0,
        priceFlavor: priceFlavor ? Number(priceFlavor) : 0,
        
      
      })
    }
  }

  handleNextStep = (price) => {
    const { router, actions, sizeState } = this.props;

    if (sizeState.selectedSize) {
      localStorage.setItem("size", sizeState.selectedSize);
      localStorage.setItem("priceSize", sizeState.priceSize);
      localStorage.setItem('total', price)
    }
  };

  handleUncheckSize = (price) =>{

    const {  actions } = this.props;

    localStorage.removeItem("size");
    localStorage.removeItem("priceSize");
    localStorage.setItem('total', price)

    actions.handleResetCheckboxSize();
  }

  render() {
    const { actions, sizeState } = this.props;
    console.log("sizeState", sizeState);

    return (
      <div>
        {
          <Size
            actions={actions}
            sizeState={sizeState}
            handleNextStep={this.handleNextStep}
            handleUncheckSize={this.handleUncheckSize}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ sizeReducer }) => ({ sizeState: sizeReducer });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...commonActions, ...sizeActions }, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SizeContainer);
