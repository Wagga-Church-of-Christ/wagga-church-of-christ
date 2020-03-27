import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import HomePageOtherRooms from './HomePageOtherRooms';
import Map from '../map/Map';
import Template from '../template/Template';
import './HomePage.scss'

const HomePage = (props) => {
  return (
    <Template>
      <div className="home-page">
        <HomePageMeetingTimes />
        <HomePageText />
        <Map />
        <HomePageOtherRooms />
      </div>
    </Template>
  )
}

export default HomePage;
