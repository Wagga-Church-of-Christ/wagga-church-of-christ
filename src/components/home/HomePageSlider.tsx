import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "./HomePageSlider.scss"



interface IHomePageSliderProps {

}


interface IHomePageSliderState {
  padding: number;
  slides: ISlides[];
}


interface ISlides {
  type: string;
  title: string;
  subtitle: string;
  url: string;
  imageUrl: string;
  internalLink: boolean
}


class HomePageSlider extends React.Component<IHomePageSliderProps, IHomePageSliderState> {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
        "type": "",
        "title": "",
        "subtitle": "",
        "url": "/sermons",
        "imageUrl": "/img/pommy.jpg",
        "internalLink": true
      }
      ]
    }
  }

  getPadding = () => {
    return 0;
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding()
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding + 'px',
      slidesToShow: 1,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true
    };

    const slides = this.state.slides.map((slide, index) => {
      return (
        <div key={index}>
          <HomePageSlide {...slide} />
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
