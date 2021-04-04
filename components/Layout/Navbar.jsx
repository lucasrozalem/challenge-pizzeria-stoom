import React from "react";
import Link from "next/link";

const MainMenu = (props) => {
  const {  pathname } = props;

  let tam = 0;
  let score = 0;
  if (typeof localStorage == "object") {
    const total = localStorage.getItem('total')
    if(total){
      tam=1
    }
    const points = localStorage.getItem('points')
    if(points){
score = points
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
      style={{ marginTop: 0, top: 0 }}
    >
      <div className="container">
        <div className="navbar-left">
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/index">
            <img src="/static/images/pizzalogo.png" alt="logo" width="55" />
          </a>
          <a
            href="/massa"
            className={pathname == "/massa" ? "nav-link active" : "nav-link"}
            style={{
              textTransform: "none",
              color: "#f59014",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            MONTE SUA PIZZA!
          </a>
          <a>Pizza Points: <strong>{score}</strong></a>
        </div>

        <section className="navbar-mobile">
      
          <nav className="nav nav-navbar ml-auto">
            <a className="nav-link d-none d-md-block" href="/massa">
             
               <img
                src="../static/images/pizza_cart.png"
                alt="logo"
                width={25}
              />
              <span className="badge badge-number badge-danger">{tam}</span>
            </a>
          </nav>
        </section>
      </div>
    </nav>
  );
};

export default MainMenu;
