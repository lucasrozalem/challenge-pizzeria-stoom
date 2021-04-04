import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "antd";
import PropTypes from "prop-types";

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
              Tem certeza que deseja finalizar a pizza sabor {flavorState.flavor}?
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
                  marginLeft:20,
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
                NOVA PIZZA
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
                   marginLeft:20
                 }}
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
