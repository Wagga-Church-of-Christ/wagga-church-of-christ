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
            <a href=https://meet.google.com/kjs-siny-oow><b>Link to Online Video Conference</b></a>
            
            If it is easier for you, you may also join the meeting
            by ringing +61 2 8320 4510 
            and when prompted provide the pin 931 759 814 8738#.
          </p>
          
          <h2>AS A CHURCH WE MEET TOGETHER ON SUNDAYS AT 10:00 AM</h2>
          <br />
          <h3>
            We pray together at 9:00AM before the service and we pray each
            Sunday evening.</h3>
          <h3>7:00PM during daylight savings and 5:00PM
            standard eastern time.</h3>
          <br />
          <h3>Kids church is at 9:15 AM before the service.</h3>
          <br />
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
