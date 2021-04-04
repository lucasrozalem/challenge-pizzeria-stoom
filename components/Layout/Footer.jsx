import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer py-7">
      <div className="container">
        <div className="row gap-y">
          <div className="col-6 col-md-4 col-xl-3">
            <h6 className="mb-4" style={{ color: "#87ceeb", fontWeight: 700 }}>
              Endereço
            </h6>
            <div className="nav flex-column">
              <a>Pizza LTDA</a>

              <a>Av. Paulista, 34</a>
              <a>Ed. 1, Sala 02</a>
              <a> São Paulo - SP</a>
              <a>CEP: 11111-111</a>
              <a>(11) 2222-2222</a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-xl-2">
            <h6 className="mb-4" style={{ color: "#87ceeb", fontWeight: 700 }}>
              Mapa do Site
            </h6>
            <div className="nav flex-column">
              <Link href="/massa">
                <a className="nav-link">Monte sua Pizza</a>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-3 order-md-first"
            style={{ textAlign: "center" }}
          >
            <Link href="/">
              <a>
                <img
                  src="/static/images/pizzalogo.png"
                  alt="logo"
                  width={160}
                />
              </a>
            </Link>
            <div className="social social-sm social-bg-brand social-cycling mt-6">
              <a
                className="social-instagram"
                href="https://www.instagram.com/lucas_rozalem/"
                target="_blank"
              >
                <i className="ti-instagram"></i>
              </a>

              <a
                className="social-linkedin"
                href="https://www.linkedin.com/in/lucasrozalem"
                target="_blank"
              >
                <i className="ti-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
