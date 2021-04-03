import Head from "next/head";
import Navbar from '../containers/Layout/NavbarContainer';
import Dough from '../containers/Menu/Dough/DoughContainer';
import GlobalStyle from '../public/style/global.style';

const DoughPage = (props) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Head>
        <title>Menu</title>
        <script src="/assets/pixel.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/static/images/pizzalogo.png" />
        <link href="/assets/css/page.min.css" rel="stylesheet" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Produtos de limpeza que fazem a diferença." />
        <meta property="og:image"content="/static/images/meta_tag.png"/>
      </Head>
      <Navbar />
      <main className="main">
      
      <Dough/>
       
      </main>
    
      <script src="/assets/js/page.min.js"></script>
    </div>
  )
}

export default DoughPage;
