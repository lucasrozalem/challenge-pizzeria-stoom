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
    <nav className="navbar navbar-expand-lg navbar-fixed-dark bg-white" data-navbar="fixed">
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
              src="/static/images/logo-escuro.png"
              alt="logo"
              style={{ width: '100%' }}
            />
            <img
              className="logo-light"
              src="/static/images/logo-branco.png"
              alt="logo"
              style={{ width: '100%' }}
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
              <img src="/static/images/logo.png" alt="logo" width="100" />
              <button style={{ marginLeft: '10%', color: 'gray', border: '1px solid gray', backgroundColor: 'transparent', marginTop: '1%', fontWeight: 900 }} onClick={() => handleCloseNavbar()}> <i className="fa fa-close" aria-hidden="true"></i> FECHAR </button>
            </div>

            <a href="/massa" className={pathname == '/massa' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none', color:"#f59014",  fontSize:15}}>Monte Sua pizza!</a>
            <a href="/produtos" className={pathname == '/produtos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>COMPRE</a>
            <a href="/quem-somos" className={pathname == '/quem-somos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Quem Somos</a>
            <a href="/produtos" className={pathname == '/produtos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Produtos</a>
            <a href="/indique" className={pathname == '/indique' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Indique</a>
            <a href="/meio-ambiente" className={pathname == '/meio-ambiente' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Meio Ambiente</a>
            <a href="/blog" className={pathname == '/blog' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Blog</a>
           

            {
              props.navbarState.loginMade &&
              <div className="dropdown mt-3 d-none2 d-md-block2" style={{ marginLeft: '8%' }}>
                <span className="dropdown-toggle logo-light" data-toggle="dropdown"><strong style={{ color: 'white' }}>{nameUser}</strong></span>
                <span className="dropdown-toggle logo-dark" data-toggle="dropdown"><strong style={{ color: 'gray' }}>{nameUser}</strong></span>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/conta">Conta</a>
                  <a className="dropdown-item" href="/pedidos">Pedidos</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={() => props.handleSignOut()}>Sair</a>
                </div>
              </div>
            }
            {
              props.navbarState.loginMade &&
              <div className="dropdown mt-3 d-md-block2" style={{ marginLeft: '8%' }}>

                <nav className="nav nav-navbar mr-auto">
                  <span className="dropdown-toggle" data-toggle="dropdown" style={{ color: '#757575', fontSize: 18 }}><strong>{nameUser.toUpperCase()}</strong></span>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/conta"><strong style={{ color: '#757575' }}>Conta</strong></a>
                    <a className="dropdown-item" href="/pedidos"><strong style={{ color: '#757575' }}>Pedidos</strong></a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={() => props.handleSignOut()}><strong style={{ color: '#757575' }}>Sair</strong></a>
                  </div>

                </nav>
              </div>
            }

            {
              !props.navbarState.loginMade &&

              <a href='/login' className={pathname == '/login' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none', marginLeft: '5%' }}>Entre</a>

            }
            {
              !props.navbarState.loginMade &&

              <a href='/cadastro' className={pathname == '/cadastro' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Cadastre-se</a>

            }
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