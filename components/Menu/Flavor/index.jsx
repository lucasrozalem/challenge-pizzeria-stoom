import Link from "next/link";
import { useEffect } from "react";

import pizzeria from "../../../pizzeria.json";

const Flavor = (props) => {
  const { actions, flavorState, handleSetFlavorAndPriceFlavor, handleResetFlavor } = props;

  let price =
    Number(flavorState.priceDough) +
    Number(flavorState.priceSize) +
    Number(flavorState.priceFlavor);

  useEffect(() => {
    handleSetFlavorAndPriceFlavor(price);
  }, [flavorState.selectedFlavor]);

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
          /
          <Link href="/tamanho">
            <a style={{ color: "#A43D51" }}> Tamanho </a>
          </Link>{" "}
          /<strong> Sabor</strong>
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
                  Escolha o sabor da pizza:
                </h5>
                <h5 style={{ fontWeight: "bold" }}>
                  Valor: R${" "}
                  {flavorState && typeof flavorState.priceFlavor === "number"
                    ? flavorState.priceFlavor
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
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridColumnGap: "10px",
                    gridRowGap: "10px",
                    
                  }}
                >
                  {pizzeria.flavors.map((element, index) => {
                    return (
                      <div key={index}>
                        {flavorState.selectedFlavor === element.type ? (
                          <div
                            className="card shadow-4"
                            style={{
                              border: "1px solid #C4C4C4",
                              borderRadius: "3px",
                              display: "grid-row-gap",
                              height: "110px",
                              marginBottom: "0px",
                              backgroundColor: "#A43D51",
                              cursor: "pointer",
                            }}
                          >
                            <a onClick={(e) => handleResetFlavor(price)}>
                              <h6
                                style={{
                                  padding: "5px",
                                  color: "#f59014",
                                  fontWeight: "bold",
                                }}
                              >
                                {element.type}
                              </h6>

                              <h6
                                style={{
                                  padding: "5px",
                                  lineHeight: "20px",
                                  marginTop: "-1.2rem",
                                  color: "white",
                                }}
                              >
                                {element.description}
                              </h6>

                              <h6
                                style={{
                                  padding: "5px",
                                  lineHeight: "15px",
                                  color: "white",
                                }}
                              >
                                R${" "}
                                {element.price
                                  .toFixed(2)
                                  .toString()
                                  .replace(".", ",")}
                              </h6>
                            </a>
                          </div>
                        ) : (
                          <div
                            className="card shadow-4"
                            style={{
                              border: "1px solid #C4C4C4",
                              borderRadius: "3px",
                              display: "grid-row-gap",
                              height: "110px",
                              marginBottom: "0px",
                              cursor: "pointer",
                            }}
                          >
                            <a
                              onClick={(e) =>
                                actions.handleChangeFlavor({
                                  name: element.type,
                                  priceFlavor: element.price,
                                  description: element.description,
                                })
                              }
                            >
                              <h6
                                style={{ padding: "5px", fontWeight: "bold" }}
                              >
                                {element.type}
                              </h6>

                              <h6
                                style={{
                                  padding: "5px",
                                  lineHeight: "20px",
                                  marginTop: "-1.2rem",
                                }}
                              >
                                {element.description}
                              </h6>

                              <h6
                                style={{
                                  padding: "5px",
                                  lineHeight: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                R${" "}
                                {element.price
                                  .toFixed(2)
                                  .toString()
                                  .replace(".", ",")}
                              </h6>
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                marginTop: "1.4rem",
              }}
            >
              <Link href="/tamanho">
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
                  MUDAR TAMANHO
                </button>
              </Link>

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
                onClick={() => actions.handleVisibleModal()}
              >
                FINALIZAR
              </button>
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

export default Flavor;
