import React from 'react';
import './HomePageMeetingTimes.scss';

const HomePageMeetingTimes = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
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
