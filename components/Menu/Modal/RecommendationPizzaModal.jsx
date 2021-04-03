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
      handleNewPizza
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
              Oba! Pedindo nossa pizza do dia, de {recommendationState.recommendation.name} por {recommendationState.recommendation.total} você ganhará {recommendationState.recommendation.points} pontos
            </div>
          )}
          {recommendationState.recommendationTypeModal == "warning" && (
            <div>Aguarde enquanto a requisição está sendo processada.</div>
          )}

          {recommendationState.recommendationTypeModal == "danger" && (
            <div>{recommendationState.messageError}</div>
          )}
          {recommendationState.recommendationTypeModal == "success" && (
            <div>Parabéns, ao pedir a pizza do dia você ganhou {recommendationState.recommendation.points} pontos!</div>
          )}
          <br />
          {recommendationState.recommendationTypeModal == "info" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                type="primary"
                style={{
                  color: "white",
                  backgroundColor: "#A43D51",
                  marginRight: 15,
                  borderRadius: 2,
                  border: "none",
                  height: "30px",
                  justifyContent: "center",
                }}
                onClick={() => handleVisibleModal()}
              >
                CANCELAR
              </Button>
              <Button
                type="primary"
                style={{
                  color: "white",
                  backgroundColor: "#A43D51",
                  marginRight: 15,
                  borderRadius: 2,
                  border: "none",
                  height: "30px",
                  justifyContent: "center",
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
                style={{ marginLeft: "20px" }}
                onClick={() => handleNewPizza()}
              >
                NOVO PEDIDO
              </Button>

              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => handleFinishPizzaSuccess()}
              >
                CONCLUIR
              </Button>
            </div>
          )}
          {recommendationState.recommendationTypeModal == "danger" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                style={{ marginLeft: "20px" }}
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
