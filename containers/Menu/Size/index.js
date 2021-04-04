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
    const { actions } = this.props;
   let dough = localStorage.getItem("dough");
   let priceDough = localStorage.getItem("priceDough");
   let flavor = localStorage.getItem("flavor");
   let description = localStorage.getItem("description");
   let size = localStorage.getItem("size");
   let priceSize = localStorage.getItem("priceSize");
   let priceFlavor = localStorage.getItem("priceFlavor");
   let total = localStorage.getItem("total");
   console.log('typeee', typeof(priceSize))
    actions.handleSetInitialValue({
      dough: dough ? dough : "",
      priceDough: priceDough ? Number(priceDough) : 0,
      description: description ? description : "",
      flavor: flavor ? flavor : "",
      size: size ? size : "",
      priceSize: !isNaN(priceSize) ? Number(priceSize) : 0,
      total: total ? Number(total) : 0,
      priceFlavor: priceFlavor ? Number(priceFlavor) : 0,
    });
  }

  handleSetSizeAndPriceSizeLocal = (price) => {
    const { sizeState } = this.props;
    localStorage.removeItem("size");
    localStorage.removeItem("priceSize");
    localStorage.removeItem("total");
    if (sizeState.selectedSize != "") {
      localStorage.setItem("size", sizeState.selectedSize);
      localStorage.setItem("priceSize", sizeState.priceSize);
      localStorage.setItem("total", price.toString());
    }
  };

  handleUncheckSize = (price) => {
    const { actions } = this.props;

    localStorage.removeItem("size");
    localStorage.removeItem("priceSize");
    localStorage.setItem("total", price);

    actions.handleResetCheckboxSize();
  };

  render() {
    const { actions, sizeState } = this.props;
console.log('size',sizeState)
    return (
      <div>
        {
          <Size
            actions={actions}
            sizeState={sizeState}
            handleSetSizeAndPriceSizeLocal={this.handleSetSizeAndPriceSizeLocal}
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
