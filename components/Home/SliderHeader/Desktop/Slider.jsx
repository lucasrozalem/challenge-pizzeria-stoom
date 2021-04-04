import Link from "next/link";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const SliderHeader = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <section className="section p-0 d-none d-md-block">
      <AutoplaySlider
        bullets={true}
        interval={5000}
        cancelOnInteraction={false}
        play={true}
        style={{ width: "100%", height: "650px" }}
      >
        <div data-src="/static/images/home_slider/home_slide_1.jpg">
          <div style={{ display: "grid", position: "relative", fontSize: 50 }}>
            <h1 style={{ fontWeight: 900, color: "white",textShadow:'2px 2px black' }}>
              A melhor Pizza da Região
            </h1>
            <Link href="/massa">
              <a
                className="btn"
                type="button"
                style={{
                  fontSize: 20,
                  color: "#f59014",
                  fontWeight: "bold",
                  borderRadius: 2,
                  border: "none",
                  textShadow:'2px 2px black'
                }}
              >
                EU QUERO!
              </a>
            </Link>
          </div>
        </div>
        <div data-src="/static/images/home_slider/home_slide_2.jpg" >
          <div
            style={{
              marginLeft: "-65%",
              marginTop: "-17%",
              position: "relative",
              
            }}
          >
            <div className="col-lg-10 mb-8 ml-10 text-white">
              <h3 className="display-2 fw-900" style={{ lineHeight: 1, textShadow:'2px 2px black' }}>
                Cuidado e<br />
                Amor
                <br />
                <strong style={{ color: "#E7AA0D", fontWeight: 900, textShadow:'2px 2px black' }}>
                  Com a sua <br />
                  comida!
                </strong>
              </h3>
            </div>
          </div>
        </div>
        <div data-src="/static/images/home_slider/home_slide_3.jpg">
          <div
            style={{
              marginLeft: "-70%",
              marginTop: "-17%",
              position: "relative",
            }}
          ></div>
        </div>
      </AutoplaySlider>
    </section>
  );
};

export default SliderHeader;
