import AwesomeSlider from 'react-awesome-slider';

const SliderHeaderMobile = (props) => {

  const {
    sliderState,
    actions,
    handlePreviousSlider,
    handleNextSlider

  } = props;

  let sliderArray = [
    { image: 'url(/static/images/home_slider/home_slide_1.jpg)' },
    { image: 'url(/static/images/home_slider/home_slide_2.jpg)' },
    { image: 'url(/static/images/home_slider/home_slide_3.jpg)' },
    // { image: 'url(/static/images/background_home_3.png)' },
    // { image: 'url(/static/images/background_home_3.png)' }
  ]

  return (
    <section className="section d-block d-md-none" style={{ marginTop: -70 }}>

      {
        sliderArray.map((element, index) => {
          if (index == sliderState.currentSlider) {
            return (
              <div className='bg-img h-400' style={{ backgroundImage: element.image, width: '100%' }} key={index}   >
                <div className='section text-center' >
                  <div className='text-left' style={{ backgroundColor: 'transparent', marginTop: 10, marginLeft: '10%', height: '200px' }}>
                    {
                      index == 0 ?
                        <div className=" text-white" >
                          <h4 className="display-5 mt-5 fw-900" style={{ marginBottom: 0, fontSize:48}}>A Melhor</h4>
                          <h3 className="display-2 fw-900" style={{ lineHeight: 1, fontSize:24 }}><strong style={{ color: '#87ceeb', fontWeight: 900 }}>#Performancedelimpeza</strong></h3>
                        </div>
                        : null
                    }
                    {
                      index == 1 ?
                        <div className="text-white" >
                          <h3 className="display-2 fw-900" style={{ lineHeight: 1 }}>Cuidado e<br />Carinho<br /><strong style={{ color: '#87ceeb', fontWeight: 900 }}>Com as suas <br/>roupas!</strong></h3>
                        </div>
                        : null
                    }
                    {/* {
                      index == 2 ?
                        <div>
                          <h5 style={{ color: 'white', fontWeight: 'bold' }}>Text 3</h5>
                          <h3 className="display-2 fw-900" style={{ lineHeight: 1, color: 'white', marginTop: -10 }}>Compra,<br />Indica,<br />e <strong style={{ color: '#87ceeb', fontWeight: 900 }}>Ganha!</strong></h3>
                        </div>
                        : null
                    } */}

                  </div>

                  <div style={{ backgroundColor: 'transparent', height: '300px' }}>
                    <div style={{ backgroundColor: 'blue', width: '100%', position: 'relative', marginTop: '-30%' }}>
                      <button style={{ textAlign: 'center', float: 'left', width: '40px', height: '60px', backgroundColor: 'black', opacity: '25%', color: 'white', border: 'none' }} onClick={(e) => handlePreviousSlider({ value: index })}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></button>
                      <button style={{ textAlign: 'center', float: 'right', width: '40px', height: '60px', backgroundColor: 'black', opacity: '25%', color: 'white', border: 'none' }} onClick={(e) => handleNextSlider({ value: index })}><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            )

          }
        })
      }

    </section>
  );
}

export default SliderHeaderMobile;