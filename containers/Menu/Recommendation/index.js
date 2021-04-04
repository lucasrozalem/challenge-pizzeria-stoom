import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import React, { Component } from "react";

import * as commonActions from "../../../actions/commonActions";
import * as recommendationActions from "../../../actions/recommendationActions";
import Recommendation from "../../../components/Menu/Recommendation/index";
import Modal from "../../../components/Menu/Modal/RecommendationPizzaModal";

import pizzeria from "../../../pizzeria.json";
import moment from "moment";

class RecommendationContainer extends Component {
  componentDidMount() {
    const { router, actions } = this.props;

    let dayOfTheWeek = moment().isoWeekday();

    let recommendation = {};

    pizzeria.recommendations.map((element, index) => {
      if (element.day == dayOfTheWeek) {
        recommendation = {
          name: element.name,
          description: element.description,
          size: element.size,
          total: element.total,
          points: element.points,
          dough: element.dough,
        };
        actions.handleSetInitialValue({
          recommendation: recommendation,
        });
      }
    });
  }

  handleRecommendationPizza = () => {
    const { recommendationState, actions } = this.props;
    let points = localStorage.getItem("points");
    actions.handleLoadingRequest();

    if (recommendationState.recommendation) {
      actions.handleSuccessRequest();
      if (points) {
        let newPoints =
          recommendationState.recommendation.points + Number(points);
        localStorage.setItem("points", newPoints);
      } else {
        localStorage.setItem(
          "points",
          recommendationState.recommendation.points
        );
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

  render() {
    const { actions, recommendationState } = this.props;

    return (
      <div>
        {
          <Recommendation
            actions={actions}
            recommendationState={recommendationState}
            handleNextStep={this.handleNextStep}
            handleUncheckSize={this.handleUncheckSize}
          />
        }
        {recommendationState.isVisibleRecommendationModal && (
          <Modal
            handleVisibleModal={actions.handleVisibleModal}
            actions={actions}
            recommendationState={recommendationState}
            handleFinishPizzaSuccess={this.handleFinishPizzaSuccess}
            handleRecommendationPizza={this.handleRecommendationPizza}
            handleNewPizza={this.handleNewPizza}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ recommendationReducer }) => ({
  recommendationState: recommendationReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { ...commonActions, ...recommendationActions },
    dispatch
  ),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(RecommendationContainer);
