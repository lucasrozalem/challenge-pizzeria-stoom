import Head from "next/head";
import Navbar from "../containers/Layout/NavbarContainer";

import SliderHeader from "../components/Home/SliderHeader/Desktop/Slider";
import KnowMore from "../components/Home/KnowMore/Desktop/KnowMore";
import Club from "../components/Home/Club/Club";
import Footer from "../components/Layout/Footer";
import GlobalStyle from "../public/style/global.style";

const Index = (props) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Head>
        <title>Pizza</title>
        <script src="/assets/pixel.js"></script>
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
        <SliderHeader />
        {/* <SliderHeaderMobile /> */}
        {/* <Home /> */}
        <Club />
        <KnowMore />
   
      </main>
      <Footer />
     
      <script src="/assets/js/page.min.js"></script>
    </div>
  );
};

export default Index;
