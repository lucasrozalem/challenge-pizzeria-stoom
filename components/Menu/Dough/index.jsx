import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";

import { useState, ReactNode, useEffect } from "react";

import pizzeria from '../../../pizzeria.json';

const Menu = (props) => {
  const {
    actions,
    doughState,
    handleSetDough,
    handleNextStep,
    handleUncheckDough,
  } = props;

  let price =
  Number(doughState.priceDough) +
  Number(doughState.priceSize) +
  Number(doughState.priceFlavor);

  useEffect(() => {
    handleNextStep(price);
  }, [doughState.selectedDough]);

  return (
    <section style={{ backgroundColor: "transparent", marginTop:'7.2rem' }}>
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
          <Link href="/index">
            <a style={{ color: "#A43D51" }}> Home </a>
          </Link>{" "}
          /<strong> Massa</strong>
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
            marginTop: "-0.2rem",
          }}
        >
          <div className="card-body">
            <div>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <h6 style={{ fontWeight: "bold" }}>
                  Selecione a borda da sua pizza:
                </h6>
                <h5 style={{ fontWeight: "bold" }}>
               Valor: R$ {doughState && typeof doughState.priceDough === "number"
                    ? doughState.priceDough
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")
                    : ""}
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
                  {pizzeria.doughs.map((element, index) => {
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
                              onClick={() => handleUncheckDough(price)}
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
