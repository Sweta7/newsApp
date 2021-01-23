import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class CarouselTop extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { carouselImg } = this.props.state;
    return (
      <div className="carouselBkg">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              /*    src={require("./img/img1.jpg?text=First slide&bg=373940")}   */
              src={carouselImg[0].urlToImage}
              alt="Top headlines"
            />
            <Carousel.Caption>
              <h3>{carouselImg[0].title}</h3>
              <a
                href={carouselImg[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
                role="button"
              >
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImg[1].urlToImage}
              alt="Top headlines"
            />
            <Carousel.Caption>
              <h3>{carouselImg[1].title}</h3>
              <a
                href={carouselImg[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
                role="button"
              >
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImg[2].urlToImage}
              alt="Top headlines"
            />
            <Carousel.Caption>
              <h3>{carouselImg[2].title}</h3>
              <a
                href={carouselImg[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
                role="button"
              >
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
