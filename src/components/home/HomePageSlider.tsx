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
        "type": "Type name",
        "title": "A Title",
        "subtitle": "A subtitle",
        "url": "/sermons",
        "imageUrl": "https://images.unsplash.com/photo-1536704231234-beca9772ca68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        "internalLink": true
      }, {
        "type": "Type name",
        "title": "A Title",
        "subtitle": "A subtitle",
        "url": "/sermons",
        "imageUrl": "https://images.unsplash.com/photo-1543949223-fd634d634e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        "internalLink": true
      }, {
        "type": "Type name",
        "title": "A Title",
        "subtitle": "A subtitle",
        "url": "/sermons",
        "imageUrl": "https://images.unsplash.com/photo-1545299871-dfb018cf4c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "internalLink": true
      }
      ]
    }
  }

  getPadding = () => {
    if ($(window).width() > 700) {
      return ($(window).width() - 700) / 2
    } else {
      return 0;
    }
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
      autoplay: true,
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
