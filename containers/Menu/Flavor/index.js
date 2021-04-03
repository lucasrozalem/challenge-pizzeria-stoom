import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";
import React, { Component } from "react";

import * as commonActions from "../../../actions/commonActions";
import * as flavorActions from "../../../actions/flavorActions";
import Flavor from "../../../components/Menu/Flavor/index";
import Modal from "../../../components/Menu/Modal/FinalizedPizzaModal";

class FlavorContainer extends Component {
  componentDidMount() {
    const { router, actions } = this.props;
    const dough = localStorage.getItem("dough");
    const priceDough = localStorage.getItem("priceDough");
    const flavor = localStorage.getItem("flavor");
    const description = localStorage.getItem("description");
    const size = localStorage.getItem("size");
    const priceSize = localStorage.getItem("priceSize");
    const priceFlavor = localStorage.getItem("priceFlavor");
    const total = localStorage.getItem("total");

    let totalPrice = total + priceSize + priceDough + priceFlavor;
    if (localStorage.dough) {
      actions.handleSetInitialValue({
        dough: dough,
        priceDough: Number(priceDough),
        description: description ? description : "",
        flavor: flavor ? flavor : "",
        size: size ? size : "",
        priceSize: priceSize ? Number(priceSize) : 0,
        total: total ? Number(total) : 0,
        priceFlavor: priceFlavor ? Number(priceFlavor) : 0,
      });
    }
  }

  handleNextStep = (price) => {
    const { router, actions, flavorState } = this.props;

    if (flavorState.selectedFlavor) {
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
      console.log("entrou aqui 1");
      if (size) {
        console.log("entrou aqui 2");
        if (flavor) {
          console.log("entrou aqui 3");
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
    localStorage.removeItem("description");
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
    localStorage.removeItem("description");
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
    localStorage.removeItem("description");
    localStorage.setItem("total", price);

    actions.handleResetFlavor();
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
