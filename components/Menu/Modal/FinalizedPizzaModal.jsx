import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

export default class FinalizedPizzaModal extends Component {
  static propTypes = {
    flavorState: PropTypes.object.isRequired,
    handleVisibleModal: PropTypes.func.isRequired,
    handleFinishPizzaSuccess: PropTypes.func.isRequired,
    handleFinishPizza: PropTypes.func.isRequired,
  };

  render() {
    const {
      flavorState,
      handleVisibleModal,
      handleFinishPizza,
      handleFinishPizzaSuccess,
      handleNewPizza
    } = this.props;

    return (
      <div>
        <SweetAlert
          type={flavorState.pizzaTypeModal}
          title={flavorState.pizzaTitleModal}
          showConfirm={false}
        >
          {flavorState.pizzaTypeModal == "info" && (
            <div>
              Tem certeza que deseja finalizar a pizza {flavorState.flavor}?
            </div>
          )}
          {flavorState.pizzaTypeModal == "warning" && (
            <div>Aguarde enquanto a requisição está sendo processada.</div>
          )}

          {flavorState.pizzaTypeModal == "danger" && (
            <div>{flavorState.messageError}</div>
          )}
          <br />
          {flavorState.pizzaTypeModal == "info" && (
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
                onClick={() => handleFinishPizza()}
              >
                CONFIRMAR
              </Button>
            </div>
          )}
          {flavorState.pizzaTypeModal == "success" && (
            <div style={{ marginTop: 15, textAlign: "center" }}>
              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => handleNewPizza()}
              >
                NOVA PIZZA
              </Button>

              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => handleFinishPizzaSuccess()}
              >
                CONCLUIR
              </Button>
            </div>
          )}
          {flavorState.pizzaTypeModal == "danger" && (
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
