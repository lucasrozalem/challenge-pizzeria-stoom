const SliderHeader = (props) => {

  
  const {
    sliderState,
    actions,
    
  } = props;

  return (
    <section className="section p-0 d-none d-md-block">
      <div
        className="slider-dots-inside slider-dots-fill-gray"
        data-provide="slider"
        data-autoplay="true"
        data-arrows="true"
        data-dots="true"
      >
      
        <div className="bg-img h-600" style={{ backgroundImage: "url(/static/images/background_home_3.png)" }}>
          <div className="row align-items-center h-100">
            <div className="col-lg-5 mb-8 ml-10 text-white">
              <h4 className="display-5 mt-5 fw-900" style={{ marginBottom: 0 }}>Com a TK Clean você</h4>
              <h3 className="display-2 fw-900" style={{ lineHeight: 1 }}>Compra,<br />Indica,<br />e <strong style={{ color: '#87ceeb', fontWeight: 900 }}>Ganha!</strong></h3>
              <p className="gap-xy mt-0">
                <a className="btn btn-lg btn-round btn-outline-light w-200" href="#features">Saiba Mais</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-img h-600" style={{ backgroundImage: "url(/static/images/background_home_3.png)" }}>

        </div>
        <div className="bg-img h-600" style={{ backgroundImage: "url(/static/images/background_home_3.png)" }}>

        </div>
      </div>
    </section>
  );
}

export default SliderHeader;
