import Head from "next/head";
import Navbar from "../containers/Layout/NavbarContainer";
import Dough from "../containers/Menu/Dough/index";
import GlobalStyle from "../public/style/global.style";
import Recommendation from "../containers/Menu/Recommendation/index";

const DoughPage = (props) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Head>
        <title>Menu</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/images/pizzalogo.png"
        />
        <link href="/assets/css/page.min.css" rel="stylesheet" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main className="main">
        <Recommendation />
        <Dough />
      </main>

      <script src="/assets/js/page.min.js"></script>
    </div>
  );
};

export default DoughPage;
