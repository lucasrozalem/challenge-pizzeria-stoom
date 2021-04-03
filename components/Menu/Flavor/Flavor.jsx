import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";

import { useState, ReactNode, useEffect } from "react";

import pizzaria from "../../../pizzaria.json";

moment.locale("pt-br");

const Flavor = (props) => {
  const { actions, flavorState, handleSetDough, handleNextStep } = props;

  let dayOfTheWeek = moment().isoWeekday();

  let recommendation = {};

  pizzaria.recommendations.map((element, index) => {
    if (element.day === dayOfTheWeek) {
      recommendation = { element };
    }
  });

  let price =
    Number(flavorState.priceDough) +
    Number(flavorState.priceSize) +
    Number(flavorState.priceFlavor);

  useEffect(() => {
    handleNextStep(price);
  }, [flavorState.selectedFlavor]);

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
                 Agora escolha o sabor da pizza:
                </h6>
                <h5 style={{ fontWeight: "bold" }}>
                  {/* Valor: R$ {doughState != NaN ? doughState.priceDough.toFixed(2).toString().replace('.',",") : null} */}
                  Valor: R$ {flavorState.priceFlavor}
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
                    // alignContent: "center",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // textAlign: "center",
                    display:'grid',
                    gridTemplateColumns: 'auto auto auto',
                    gridColumnGap: '10px',
                    gridRowGap: '10px'

                  }}
                >
                  {pizzaria.flavors.map((element, index) => {
                    return (
                      <>
                        {flavorState.selectedDough === element.type ? (
                          <div
                          style={{
                            border: "1px solid #C4C4C4",
                            borderRadius: "3px",
                             alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
        
                          }}
                        >
                           <div
                           style={{  display:'grid-row-gap',
                           gridTemplateColumns: '1fr 2fr 2fr'}}
                           
                           >
                             <div style={{padding:'5px'}}>{element.type}</div>
                             <div style={{padding:'5px'}}>{element.description}</div>
                             <div style={{padding:'5px'}}>R$ {element.price.toFixed(2).toString().replace('.',",")}</div>
                           </div>
                          </div>
                        ) : (
                          <div
                          style={{
                            border: "1px solid #C4C4C4",
                            borderRadius: "3px",
                            
        
                          }}
                        >
                           <div
                           style={{  display:'grid-row-gap',
                           gridTemplateColumns: '1fr 2fr 2fr'}}
                           >
                             <h6 style={{padding:'5px', }}>{element.type}</h6>
                             <h6 style={{padding:'5px',  lineHeight:'25px'}}>{element.description}</h6>
                             <h6 style={{padding:'5px',  lineHeight:'15px'}}>R$ {element.price.toFixed(2).toString().replace('.',",")}</h6>
                           </div>
                           
                          </div>
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
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
              }}
            >
               <Link href="/tamanho">
                <button>Voltar</button>
              </Link>
              <Link href="/">
                <button>Fizalizar</button>
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

export default Flavor;
