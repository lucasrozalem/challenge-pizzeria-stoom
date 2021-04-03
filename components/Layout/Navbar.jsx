import React from "react";
import Link from "next/link";


const MainMenu = (props) => {

  const {
    navbarState,
    actions,
    pathname,
    handleCloseNavbar,
  } = props;

  let nameUser = [];

  if (props.navbarState.name) {
    nameUser = props.navbarState.name.split(' ');
  }

  if (nameUser.length > 0) {
    if (nameUser.length > 1) {
      nameUser = nameUser[0] + ' ' + nameUser[1];
    } else {
      nameUser = nameUser[0];
    }
  }

  if (nameUser.length >= 25) {
    nameUser = nameUser.slice(0, 22) + '...';
  }
let tam=0
  if(typeof(localStorage) == 'object'){
    let cartProducts = JSON.parse(localStorage.getItem('products') || '[]');
    let cartKit = JSON.parse(localStorage.getItem('kit') || '[]');
    cartKit.map((element, index)=>{
      tam+= 1;
    })
    cartProducts.map((element, index)=>{
      tam+= element.amount;
    })
    }

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark navbar-stick-dark bg-white" data-navbar="fixed" style={{ top: 0 }}>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-stick-dark bg-white" data-navbar="fixed">
      <div className="container" >
        <div className="navbar-left">
          <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
          <a
            style={{ color: 'white', fontSize: 25, marginRight: 20 }}
            className="d-block d-md-none"
            /*type="button"*/
            onClick={() => actions.handleNavbarMobile()}
          >
            {/* &#9776; */}
          </a>
          <a className="navbar-brand" href="/index" style={{ width: '60%' }}>
            <img
              className="logo-dark"
              src="/static/images/pizzalogo.png"
              alt="logo"
              //style={{ width: '100%' }}
            />
            <img
              className="logo-light"
              src="/static/images/pizzalogo.png"
              alt="logo"
             // style={{ width: '100%' }}
            />
          </a>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 20 }} className="d-block2 d-md-none2">
          <a className="nav-link"  href='/carrinho' style={{ marginTop: '25%' }}>
            <img src="../static/images/shopping_car.png" alt="logo" width={20} />
            <span  className="badge badge-number badge-danger">{tam == 'NaN' ? 0 : tam}</span>
          </a>
        </div>
        <section className="navbar-mobile"  >
          {/* <span className="navbar-divider d-mobile-none"></span> */}

          <nav className="nav nav-navbar" style={{ marginLeft: '-2%', width: '100%', position: 'fixed' }}>
            <div style={{ textAlign: 'center', marginBottom: 20, }} className="d-block2 d-md-none2">
              <img src="/static/images/pizzalogo.png" alt="logo" width="100" />
              <button style={{ marginLeft: '10%', color: 'gray', border: '1px solid gray', backgroundColor: 'transparent', marginTop: '1%', fontWeight: 900 }} onClick={() => handleCloseNavbar()}> <i className="fa fa-close" aria-hidden="true"></i> FECHAR </button>
            </div>

            <a href="/massa" className={pathname == '/massa' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none', color:"#f59014",  fontSize:15}}>MONTE SUA PIZZA!</a>
            <a href="/produtos" className={pathname == '/produtos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>COMPRE</a>
            <a href="/quem-somos" className={pathname == '/quem-somos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Quem Somos</a>
            <a href="/produtos" className={pathname == '/produtos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Produtos</a>
            <a href="/indique" className={pathname == '/indique' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Indique</a>
            <a href="/meio-ambiente" className={pathname == '/meio-ambiente' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Meio Ambiente</a>
           

           
            {
              !props.navbarState.loginMade &&
              <div  >
                <a className="nav-link d-none d-md-block"  href='/carrinho' style={{ marginTop: '5px' }}>
                  <img src="../static/images/shopping_car.png" alt="logo" width={20} />
                  <span href='/carrinho' className="badge badge-number badge-danger">{tam == 'NaN' ? 0 : tam}</span>
                </a>
              </div>

            }
            {
              props.navbarState.loginMade &&
              <div style={{ marginLeft: '-7%' }}>
                <a  href='/carrinho' className="nav-link d-none2 d-md-block2"  style={{ marginLeft: '-10%', marginTop: '5px' }}>
                  <img src="../static/images/shopping_car.png" alt="logo" width={20} />
                  <span   className="badge badge-number badge-danger">{tam == 'NaN' ? 0 : tam}</span>
                </a>
              </div>

            }


          </nav>

          {/* <nav className="nav nav-navbar ml-lg-1" style={{backgroundColor:'brown', width:'65%', marginLeft:'-5%'}} >
           
          </nav> */}
        </section>
      </div>
    </nav>

  );
}

export default MainMenu;