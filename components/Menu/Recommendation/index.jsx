import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";

import { useState, ReactNode, useEffect } from "react";



moment.locale("pt-br");

const Recommendation = (props) => {
  const { actions, recommendationState} = props;

 
  return (
    <section
      className="section"
      style={{
        backgroundColor: "white",
        height: "250px",
        borderRadius: 15,
        marginTop: "-1.8rem",
        
      }}
    >
      <div className="container" style={{ borderRadius: 20, height: "230px",  }}>
    

      
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
                Aproveite a nossa pizza de {recommendationState.recommendation.name}
              </h3>
              <p style={{ color: "white" }}>
                {recommendationState.recommendation.description}
              </p>
              <p style={{ color: "white" }}>
                Massa: {recommendationState.recommendation.dough}
              </p>

              <p style={{ color: "white" }}>
                Tamanho: {recommendationState.recommendation.size}
              </p>
              <p style={{ color: "white" }}>
                {" "}
                Por Apenas: R${" "}
                {recommendationState && typeof recommendationState.recommendation.total === "number"
                    ? recommendationState.recommendation.total
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")
                    : ""}
              </p>
              
            </div>
               <div style={{justifyContent:'center', display:'flex', marginTop:'6.1rem'}}>
               <button type='button' style={{position:'relative' }} onClick={()=> actions.handleVisibleModal()}>CLIQUE AQUI E SAIBA MAIS!</button>
                 </div>   
           
          </div>
        </div>
      
       </div>
    </section>
  );
};

export default Recommendation;
