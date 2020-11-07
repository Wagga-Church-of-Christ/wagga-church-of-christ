import React from 'react';
import './HomePageMeetingTimes.scss';

const HomePageOtherRooms = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>Google Meet Rooms</h2>
          <p>
            To facilitate groups meeting throughout the week in their own
            meeting rooms we have a total of three rooms. Each of these rooms
            is outlined below, along with a phone number you can call to dial
            in.
          </p>
          <h3>
            <a href="https://meet.google.com/puf-mxqk-iua">
              Link for the Prayer Room
            </a>
          </h3>
          <p>
            Phone number 02 8320 4510 with the pin 595 128 845 5210#.
          </p>
          <h3>
            <a href="https://meet.google.com/vid-nozn-jbu">
              Link for Small Group Room 1
            </a>
          </h3>
          <p>
            Phone number 02 8320 4510 with the pin 784 725 569 7475#.
          </p>
          <h3>
            <a href="https://meet.google.com/bzj-pjrx-yvs">
              Link for Small Group Room 2
            </a>
          </h3>
          <p>
            Phone number 02 8320 4510 with the pin 864 600 328 2448#.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageOtherRooms;
