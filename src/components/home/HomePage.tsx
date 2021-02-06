import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import HomePageOtherRooms from './HomePageOtherRooms';
import Template from '../template/Template';
import './HomePage.scss'

const HomePage = (props) => {
  return (
    <Template>
      <div className="home-page">
        <HomePageMeetingTimes />
        <HomePageIntro />
        <HomePageSlider />
        <HomePageText />
        <HomePageOtherRooms />
      </div>
    </Template>
  )
}

export default HomePage;
