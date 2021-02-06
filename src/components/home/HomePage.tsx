import React from 'react';
// import HomePageSlider from './HomePageSlider';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import Template from '../template/Template';
import './HomePage.scss'

const HomePage = (props) => {
  return (
    <Template>
      <div className="home-page">
        <HomePageMeetingTimes />
        <HomePageText />
      </div>
    </Template>
  )
}

export default HomePage;
