import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";

import { useState, ReactNode, useEffect } from "react";

import pizzaria from "../../../pizzaria.json";

moment.locale("pt-br");

const Menu = (props) => {
  const { actions, doughState, handleSetDough, handleNextStep } = props;

  let dayOfTheWeek = moment().isoWeekday();

  let recommendation = {};

  pizzaria.recommendations.map((element, index) => {
    if (element.day === dayOfTheWeek) {
      recommendation = { element };
    }
  });

  let price =
    Number(doughState.priceDough) +
    Number(doughState.priceSize) +
    Number(doughState.priceFlavor);

  useEffect(() => {
    handleNextStep(price);
  }, [doughState.selectedDough]);

  return (
    <section className="section" style={{ backgroundColor: "white" }}>
      <div className="container" syule={{ float: "left", width: "100%" }}>
        <div
          className="container"
          bordered={0}
          style={{
            backgroundColor: "#EFEFEF",
            width: "100%",
            height: "45px",
            borderRadius: 6,
            lineHeight: "3",
          }}
        >
          <Link href="/">
            <a style={{ color: "#A43D51" }}> Home </a>
          </Link>{" "}
          /<strong> Menu</strong>
        </div>
      </div>

      <br />

      <div className="container">
        <div
          className="card shadow-4"
          style={{
            width: "100%",
            float: "left",
            border: "1px solid #D6D6D6",
            backgroundImage: "url(../static/images/background_promotion.png)",
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div style={{ float: "left", width: "10%" }}>
              <img src="/static/images/promocao.png" alt="promotion" />
            </div>
            <div style={{ float: "left", marginLeft: "7.2rem" }}>
              <h3 style={{ color: "white" }}>
                Aproveite a nossa pizza de {recommendation.element.name}
              </h3>
              <p style={{ color: "white" }}>
                {recommendation.element.description}
              </p>
              <p style={{ color: "white" }}>
                Massa: {recommendation.element.dough}
              </p>

              <p style={{ color: "white" }}>
                Tamanho: {recommendation.element.size}
              </p>
              <p style={{ color: "white" }}>
                {" "}
                Por Apenas: R${" "}
                {recommendation.element.total
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")}
              </p>
            </div>
          </div>
        </div>
        <div
          className="card shadow-4"
          style={{
            width: "100%",
            float: "left",
            border: "1px solid #D6D6D6",
            marginTop: "1.6rem",
          }}
        >
          <div className="card-body">
            <div>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <h6 style={{ fontWeight: "bold" }}>
                  Selecione o tamanho da sua pizza:
                </h6>
                <h5 style={{ fontWeight: "bold" }}>
                  {/* Valor: R$ {doughState != NaN ? doughState.priceDough.toFixed(2).toString().replace('.',",") : null} */}
                  Valor: R$ {doughState.priceDough}
                </h5>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div style={{ marginTop: -40 }}>
              <div>
                <div
                  style={{
                    // border: "1px solid #C4C4C4",
                    // borderRadius: "3px",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {pizzaria.doughs.map((element, index) => {
                    return (
                      <>
                        {doughState.selectedDough === element.type ? (
                          <>
                            <input
                              style={{ marginLeft: "1.4rem" }}
                              type="checkbox"
                              // id='dough'
                              // name="dough"
                              checked
                              onClick={(e) =>
                                actions.handleResetCheckboxDough()
                              }
                            ></input>
                            <label for="dough" style={{ marginLeft: "0.2rem" }}>
                              {element.type}
                            </label>
                          </>
                        ) : (
                          <>
                            <input
                              style={{ marginLeft: "1.4rem" }}
                              type="checkbox"
                              // id='dough'
                              // name="dough"
                              checked={false}
                              onClick={(e) =>
                                actions.handleCheckboxChangeDough({
                                  name: element.type,
                                  priceDough: element.price,
                                })
                              }
                            ></input>
                            <label for="dough" style={{ marginLeft: "0.2rem" }}>
                              {element.type}
                            </label>
                          </>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Link href="/tamanho">
                <button>Continuar</button>
              </Link>
            </div>
          </div>
        </div>
        <h2 style={{ textAlign: "right" }}>
          {/* Preço total: R$ {price.toFixed(2).toString().replace(".", ",")} */}
          Preço total: R$ {price.toFixed(2).toString().replace(".", ",")}
        </h2>
      </div>
    </section>
  );
};

export default Menu;
