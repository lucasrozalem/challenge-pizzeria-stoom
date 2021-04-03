import Link from "next/link";

const Navbar = (props) => {

  const {
    pathname
  } = props

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

  
  return (    
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark d-none d-md-block" style={{ top: 0 }}>
      <div className="container">

        <div className="navbar-left mr-4">
          <button className="navbar-toggler" type="button" style={{ zIndex: 20 }}><span className="navbar-toggler-icon"></span></button>
          <Link href="/index">
            <a className="navbar-brand">
              <img className="logo-dark" src="/static/images/logo.png" alt="logo" width={70} />
              <img className="logo-light" src="/static/images/logo_branco.png" alt="logo" width={70} />
            </a>
          </Link>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar mr-auto">
            <div style={{ textAlign: 'center', marginBottom: 20 }} className="d-block d-md-none">
              <img src="/static/images/logo.png" alt="logo" width="100" />
            </div>
           
           <a href="/index" className={pathname == '/index' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Home</a>             
           <a href="/quem-somos" className={pathname == '/quem-somos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Quem Somos</a>                 
           <a href="/produtos" className={pathname == '/produtos' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Produtos</a>                 
           <a href="/indique" className={pathname == '/indique' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Indique</a> 
           <a href="/meio-ambiente" className={pathname == '/meio-ambiente' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Meio Ambiente</a>  
           <a href="/blog" className={pathname == '/blog' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Blog</a>        
       </nav>       

       <nav className="nav nav-navbar ml-lg-5">
            {
              props.navbarState.loginMade &&
              <div className="dropdown mt-4 d-none d-md-block">
                <span className="dropdown-toggle logo-light" data-toggle="dropdown"><strong style={{ color: 'white' }}>{nameUser}</strong></span>
                <span className="dropdown-toggle logo-dark" data-toggle="dropdown"><strong style={{ color: 'black' }}>{nameUser}</strong></span>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Conta</a>
                  <a className="dropdown-item" href="#">Pedidos</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={() => props.handleSignOut()}>Sair</a>
                </div>
              </div>
            }
            {
              !props.navbarState.loginMade &&
                <a href="/login" className={pathname == '/login' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Entre</a>
            }
            {
              !props.navbarState.loginMade &&
                <a href="/cadastro" className={pathname == '/cadastro' ? "nav-link active" : "nav-link"} style={{ textTransform: 'none' }}>Cadastre-se</a>
            }
            <a className="nav-link d-none d-md-block" href="#">
              <img src="../static/images/shopping_car.png" alt="logo" width={20} />
              <span className="badge badge-number badge-danger">4</span>
            </a>
          </nav>

        </section>

      </div>
    </nav>
  

  )
}

export default Navbar;
