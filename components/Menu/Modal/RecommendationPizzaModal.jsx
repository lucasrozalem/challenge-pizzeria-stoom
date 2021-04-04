import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

export default class RecommendationPizzaModal extends Component {
  static propTypes = {
    recommendationState: PropTypes.object.isRequired,
    handleVisibleModal: PropTypes.func.isRequired,
    handleFinishPizzaSuccess: PropTypes.func.isRequired,
    handleFinishPizza: PropTypes.func.isRequired,
  };

  render() {
    const {
      recommendationState,
      handleVisibleModal,
      handleRecommendationPizza,
      handleFinishPizzaSuccess,
      handleNewPizza,
    } = this.props;

    return (
      <div>
        <SweetAlert
          type={recommendationState.recommendationTypeModal}
          title={recommendationState.pizzaTitleModal}
          showConfirm={false}
        >
          {recommendationState.recommendationTypeModal == "info" && (
            <div>
              Oba! Pedindo nossa pizza do dia, sabor{" "}
              {recommendationState.recommendation.name} por R${" "}
              {recommendationState.recommendation.total
                .toFixed(2)
                .toString()
                .replace(".", ",")}{" "}
              você ganhará {recommendationState.recommendation.points} pontos
            </div>
          )}
          {recommendationState.recommendationTypeModal == "warning" && (
            <div>Aguarde enquanto a requisição está sendo processada.</div>
          )}

          {recommendationState.recommendationTypeModal == "danger" && (
            <div>{recommendationState.messageError}</div>
          )}
          {recommendationState.recommendationTypeModal == "success" && (
            <div>
              Parabéns, ao pedir a pizza do dia você ganhou{" "}
              {recommendationState.recommendation.points} pontos!
            </div>
          )}
          <br />
          {recommendationState.recommendationTypeModal == "info" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                className="btn"
                type="button"
                style={{
                  color: "#f59014",
                  backgroundColor: "#A43D51",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                }}
                onClick={() => handleVisibleModal()}
              >
                CANCELAR
              </Button>
              <Button
                className="btn"
                type="button"
                style={{
                  color: "#f59014",
                  backgroundColor: "#A43D51",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                  marginLeft: 20,
                }}
                onClick={() => handleRecommendationPizza()}
              >
                CONFIRMAR
              </Button>
            </div>
          )}
          {recommendationState.recommendationTypeModal == "success" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                className="btn"
                type="button"
                style={{
                  color: "#f59014",
                  backgroundColor: "#A43D51",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                }}
                onClick={() => handleNewPizza()}
              >
                NOVO PEDIDO
              </Button>

              <Button
                className="btn"
                type="button"
                style={{
                  color: "#f59014",
                  backgroundColor: "#A43D51",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                  marginLeft: 20,
                }}
                onClick={() => handleFinishPizzaSuccess()}
              >
                CONCLUIR
              </Button>
            </div>
          )}
          {recommendationState.recommendationTypeModal == "danger" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                className="btn"
                type="button"
                style={{
                  color: "#f59014",
                  backgroundColor: "#A43D51",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                }}
                onClick={() => handleVisibleModal()}
              >
                VOLTAR
              </Button>
            </div>
          )}
        </SweetAlert>
      </div>
    );
  }
}
