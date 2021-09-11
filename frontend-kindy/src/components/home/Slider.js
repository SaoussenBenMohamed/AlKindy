
import React from "react"
import { Row, Col } from "react-bootstrap"
import OwlCarousel from "react-owl-carousel"
import VisibilitySensor from "react-visibility-sensor"
import banner from "../../assets/img/AlKindy-Banner.jpg"
import { useApi } from "../../hooks/useApi"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"

export default function Slider() {
  const [sliders] = useApi("sliders")

  if (!sliders || sliders.length === 0)
    return (
      <div className="single-slider-item" style={{ backgroundImage: `url("${banner}")` }} key={0}>
        <div className="diplay-table overlay">
          <div className="display-table-cell">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      
                      <div className="center-wrap"></div>
                    </div>
                  </div>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    )

  let bannersData = sliders.sort(compareValues("lastUpdateAt", "desc")).map(slider => (
    <div className={`single-slider-item item-${slider._id}`} key={slider._id}>
      <div className="diplay-table overlay">
        <div className="display-table-cell" style={{ verticalAlign: "middle", height: "100%" }}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="container slider-base" style={{ height: "100%" }}>
                <Row style={{ height: "100%" }}>
                  <Col lg={7} md={7}></Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className="slider-container"
                    style={{
                      padding: " 60px 0",
                      backgroundColor: "rgb(0,0,0,0.6)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}>
                    <Row>
                      <Col
                        className="slider-title"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          padding: "0 30px",
                        }}>
                        <span className={isVisible ? "opacityOne" : "opacityZero"}>{slider.titleDescription}</span>
                        <h1 className={isVisible ? "opacityOne" : "opacityZero"}>{slider.title}</h1>
                        <p className={isVisible ? "opacityOne" : "opacityZero"}>{slider.description}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className="slider-button"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}>
                        <div className="center-wrap">
                          {slider.url && slider.btnName && (
                            <LinkDuo to={slider.url} className="btn-a">
                              <div className="button">
                                {slider.btnName}
                                <i className="icofont-long-arrow-right" />
                                <div className="mask" />
                              </div>
                            </LinkDuo>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={1} md={1}></Col>
                </Row>

                <img
                  src={process.env.REACT_APP_API_URL_UPLOADS + slider.image}
                  alt={slider.title}
                  className="slider-image"
                  style={{
                    position: "absolute",
                    width: "100%",
                    transform: "translateY(-50%)",
                    top: "50%",
                    left: "0",
                    zIndex: "-1",
                    // filter: "brightness(0.5)",
                  }}
                />
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  ))
  let bannersStyles = sliders.sort(compareValues("lastUpdateAt", "desc")).map(slider => (
    <style
      key={slider._id}
      dangerouslySetInnerHTML={{
        __html: [
          `.item-${slider._id}:before {`,
          "  position: absolute;",
          "  width: 100%;",
          '  content: "";',
          "  -webkit-filter: blur(5px);",
          "  filter: blur(5px) brightness(0.6);",
          "  z-index: 0;",
          `  background: url("${process.env.REACT_APP_API_URL_UPLOADS + slider.image}") no-repeat top center / cover;`,
          "  height: 100%;",
          "}",
        ].join("\n"),
      }}></style>
  ))
  //BannerOne loop END
  const options = {
    className: "owl-theme home-slides pad-60",
    items: 1,
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    touchDrag: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    navText: [
      '<span class="icofont-rounded-left icofont-3x"></span>',
      '<span class="icofont-rounded-right icofont-3x"></span>',
    ],
  }

  //Thumbs loop END
  return (
    <>
      {bannersStyles}
      <OwlCarousel {...options}>{bannersData}</OwlCarousel>
    </>
  )
}
