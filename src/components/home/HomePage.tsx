import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import Map from '../map/Map';
import Template from '../template/Template';
import './HomePage.scss'

const HomePage = (props) => {
  return (
    <Template>
      <div className="home-page">
        <HomePageSlider />
        <HomePageIntro />
        <HomePageText />
        <HomePageMeetingTimes />
        <Map />
      </div>
    </Template>
  )
}

export default HomePage;
