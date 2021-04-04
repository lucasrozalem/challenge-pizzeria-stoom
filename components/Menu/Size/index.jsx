import Link from "next/link";
import { useEffect } from "react";

import pizzeria from "../../../pizzeria.json";

const Size = (props) => {
  const { actions, sizeState, handleSetSizeAndPriceSizeLocal, handleUncheckSize } = props;

  let price =
    Number(sizeState.priceDough) +
    Number(sizeState.priceSize) +
    Number(sizeState.priceFlavor);

  useEffect(() => {
    handleSetSizeAndPriceSizeLocal(price);
  }, [sizeState.selectedSize]);

  return (
    <section style={{ backgroundColor: "transparent", marginTop: "4.4rem" }}>
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
          /
          <Link href="/massa">
            <a style={{ color: "#A43D51" }}> Massa </a>
          </Link>{" "}
          /<strong> Tamanho</strong>
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
                <h5 style={{ fontWeight: "bold" }}>
                  Selecione o tamanho da sua pizza:
                </h5>
                <h5 style={{ fontWeight: "bold" }}>
                  {/* Valor: R$ {sizeState ? sizeState.priceSize.toFixed(2).toString().replace('.',",") : null} */}
                  Valor: R${" "}
                  {sizeState && typeof sizeState.priceSize === "number"
                    ? sizeState.priceSize
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
                  {pizzeria.sizes.map((element, index) => {
                    return (
                      <>
                        {sizeState.selectedSize === element.type ? (
                          <>
                            <input
                              style={{ marginLeft: "1.4rem" }}
                              type="checkbox"
                              // id='dough'
                              // name="dough"
                              checked
                              onClick={(e) => handleUncheckSize(price)}
                            ></input>
                            <label
                              style={{ marginLeft: "0.2rem", fontSize: 16 }}
                            >
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
                                actions.handleCheckboxChangeSize({
                                  name: element.type,
                                  priceSize: element.price,
                                })
                              }
                            ></input>
                            <label
                              style={{ marginLeft: "0.2rem", fontSize: 16 }}
                            >
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
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Link href="/massa">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      color: "#f59014",
                      backgroundColor: "#A43D51",
                      fontWeight: "bold",
                      borderRadius: 2,
                      border: "none",
                    }}
                  >
                    MUDAR MASSA
                  </button>
                </Link>
                <Link href="/recheio">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      color: "#f59014",
                      backgroundColor: "#A43D51",
                      fontWeight: "bold",
                      borderRadius: 2,
                      border: "none",
                    }}
                  >
                    CONTINUAR
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ textAlign: "right", fontWeight: "bold" }}>
          Preço total: R$ {price.toFixed(2).toString().replace(".", ",")}
        </h2>
      </div>
    </section>
  );
};

export default Size;
