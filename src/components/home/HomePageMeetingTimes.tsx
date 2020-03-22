import React from 'react';
import './HomePageMeetingTimes.scss';

const HomePageMeetingTimes = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>CURRENT COVID-19 ARRANGEMENTS</h2>
          
          <p>
            We meet as a church online and via a group phone call
            on Sunday's at 10:00 AM.
            
            You can join the meeting by clicking the following link
            on either a computer, mobile phone, or tablet --
            <a href="https://meet.google.com/kjs-siny-oow"><b>Link to Online Video Conference</b></a>
            
            If it is easier for you, you may also join the meeting
            by ringing +61 2 8320 4510 
            and when prompted provide the pin 931 759 814 8738#.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
