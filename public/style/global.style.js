const GlobalStyle = () => {
  return (
    <style>
      {`
        body, h1, h2, h3, h4, h5, h6, p, a, div {
          font-family: Montserrat
        }
        .desktop {
          display: block
        }

        .mobile {
          display: none
        }

        .tablet {
          display: none
        }

        @media(max-width: 960px){
          .desktop {
            display: none;
          }

          .mobile {
            display: block;
          }
        }
      `}
    </style>
  );
}

export default GlobalStyle;