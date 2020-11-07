import React from 'react';
import './HomePageMeetingTimes.scss';

const HomePageMeetingTimes = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>CURRENT COVID-19 ARRANGEMENTS</h2>
          <p>
            We now meet on Sunday mornings at 10 am observing social
            distancing, hygienic sanitising, and contact tracing protocols.
            The Google
            Meets platform is still active. See the links at the bottom of this
            page for the respective rooms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
