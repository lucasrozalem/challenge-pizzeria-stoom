import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const SliderHeader = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    // <section className='section p-0 d-none d-md-block' >
    <section className='section p-0 d-none d-md-block' >
      <AutoplaySlider bullets={true} interval={5000} cancelOnInteraction={false} play={true} style={{ width: '100%', height: '650px' }}>
        <div data-src="/static/images/home_slider/home_slide_1.jpg">
        <div style={{ marginLeft: '-40%', marginTop: '-17%', position: 'relative' }}>
            <div className="col-lg-10 mb-8 ml-10 text-white" >
              <h4 className="display-5 mt-5 fw-900" style={{ marginBottom: 0, fontSize:48}}>A Melhor</h4>
              <h3 className="display-2 fw-900" style={{ lineHeight: 1, fontSize:42 }}><strong style={{ color: '#87ceeb', fontWeight: 900 }}>#Pizzadaregião</strong></h3>
            </div>
          </div>
        </div>
        <div data-src="/static/images/home_slider/home_slide_2.jpg" >
        <div style={{ marginLeft: '-45%', marginTop: '-17%', position: 'relative' }}>
            <div className="col-lg-10 mb-8 ml-10 text-white" >
              <h3 className="display-2 fw-900" style={{ lineHeight: 1 }}>Cuidado e<br />Carinho<br /><strong style={{ color: '#87ceeb', fontWeight: 900 }}>Com as suas <br/>roupas!</strong></h3>
            </div>
          </div>
        </div>
        <div data-src="/static/images/home_slider/home_slide_3.jpg" >
          <div style={{ marginLeft: '-70%', marginTop: '-17%', position: 'relative' }}>
            {/* <div className="col-lg-10 mb-8 ml-10 text-white" >
              <h4 className="display-5 mt-5 fw-900" style={{ marginBottom: 0 }}>Com a TK Clean você</h4>
              <h3 className="display-2 fw-900" style={{ lineHeight: 1 }}>Compra,<br />Indica,<br />e <strong style={{ color: '#87ceeb', fontWeight: 900 }}>Ganha!</strong></h3>
              <p className="gap-xy mt-0">
                <a className="btn btn-lg btn-round btn-outline-light w-200" href="#features">Saiba Mais</a>
              </p>
            </div> */}
          </div>
        </div>
        <div data-src="/static/images/home_slider/home_slide_4.jpg" >
          <div style={{ marginLeft: '-70%', marginTop: '-17%', position: 'relative' }}>
            <button>Escolha sua Pizza!</button>
          </div>
        </div>
      </AutoplaySlider>

    </section>
  );
}

export default SliderHeader;
