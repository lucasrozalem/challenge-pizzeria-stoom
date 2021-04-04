import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import React, { Component } from "react";

import * as commonActions from "../../../actions/commonActions";
import * as flavorActions from "../../../actions/flavorActions";
import Flavor from "../../../components/Menu/Flavor/index";
import Modal from "../../../components/Menu/Modal/FinalizedPizzaModal";

class FlavorContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;
    let dough = localStorage.getItem('dough');
    let priceDough = localStorage.getItem('priceDough');
    let flavor = localStorage.getItem('flavor');
    let description = localStorage.getItem("description");
    let size = localStorage.getItem('size');
    let priceSize = localStorage.getItem('priceSize');
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

  handleSetFlavorAndPriceFlavor = (price) => {
    const { flavorState } = this.props;
    localStorage.removeItem("flavor");
    localStorage.removeItem("priceFlavor");
    localStorage.removeItem("total");
    if (flavorState.selectedFlavor != "") {
      localStorage.setItem("flavor", flavorState.selectedFlavor);
      localStorage.setItem("priceFlavor", flavorState.priceFlavor);
      localStorage.setItem("total", price);
    }
  };

  handleFinishPizza = () => {
    const {
      flavorState: { size, dough, flavor },
      actions,
    } = this.props;

    actions.handleLoadingRequest();

    if (dough) {
      if (size) {
        if (flavor) {
          actions.handleSuccessRequest();
        } else {
          actions.handleErrorModal({
            message: "Por favor selecione o sabor da pizza",
          });
        }
      } else {
        actions.handleErrorModal({
          message: "Por favor selecione o tamanho da pizza",
        });
      }
    } else {
      actions.handleErrorModal({
        message: "Por favor selecione a massa da pizza.",
      });
    }
  };

  handleFinishPizzaSuccess = () => {
    localStorage.removeItem("total");
    localStorage.removeItem("dough");
    localStorage.removeItem("priceDough");
    localStorage.removeItem("flavor");
    localStorage.removeItem("size");
    localStorage.removeItem("priceSize");
    localStorage.removeItem("priceFlavor");
    localStorage.removeItem("total");

    window.location.href = "/index";
  };

  handleNewPizza = () => {
    localStorage.removeItem("total");
    localStorage.removeItem("dough");
    localStorage.removeItem("priceDough");
    localStorage.removeItem("flavor");
    localStorage.removeItem("size");
    localStorage.removeItem("priceSize");
    localStorage.removeItem("priceFlavor");
    localStorage.removeItem("total");

    window.location.href = "/massa";
  };

  handleResetFlavor = (price) => {
    const { actions } = this.props;

    localStorage.removeItem("priceFlavor");
    localStorage.removeItem("flavor");
    localStorage.setItem("total", price);

    actions.handleResetFlavor();
  };

  render() {
    const { actions, flavorState } = this.props;
 
    return (
      <div>
        {
          <Flavor
            actions={actions}
            flavorState={flavorState}
            handleSetFlavorAndPriceFlavor={this.handleSetFlavorAndPriceFlavor}
            handleFinishPizza={this.handleFinishPizza}
            handleResetFlavor={this.handleResetFlavor}
          />
        }
        {flavorState.isVisiblePizzaModal && (
          <Modal
            handleVisibleModal={actions.handleVisibleModal}
            flavorState={flavorState}
            handleFinishPizza={this.handleFinishPizza}
            handleFinishPizzaSuccess={this.handleFinishPizzaSuccess}
            handleNewPizza={this.handleNewPizza}
          />
        )}
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
