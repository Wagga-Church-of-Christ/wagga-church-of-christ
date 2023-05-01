import React from 'react';
import $ from 'jquery';
import './HomePageText.scss';


const embedVideo = () => {
  const channelID = "UCSkF_4CrX9FZ9xfrrz2udyA";
  const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
  $.getJSON(
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent(reqURL) + channelID, function (data) {
      const link = data.items[0].link;
      const id = link.substr(link.indexOf("=") + 1);
      $("#youtube_video").attr("src", "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0");
    });
}


class HomePageText extends React.Component {
  componentDidMount() {
    embedVideo()
  }

  render() {
    return (
      <div className="row">
        <span className="homepage-text about">
          <h3>Welcome to this local expression of what Jesus called "My Church"</h3>

          <p>
            We are not in the marketplace of ideas, but in the wonder of knowing
            the Lord Jesus, and of seeking an ever increasing knowledge of Himself
            personally, and the life which He alone gives.
          </p>
          <p>Our objective is that all we do by way of worship and serving
          our Lord and one another might be an expression of that shared
          life that He so freely gives us, for His glory.
          </p>
        </span>
        <span className="homepage-text vision">
          <h3>Sunday Meeting</h3>
            We meet together in person at 10 am on Sundays at 49 Fernleigh Rd, Turvey Park NSW 2650
        </span>
        <span className="homepage-text vision">
          <h3>Online Rooms</h3>
          <p>
            To facilitate groups meeting throughout the week
            we have two online rooms. Both of these rooms
            are outlined below, along with a phone number you can call to dial
            in.
          </p>
          <h3>
            <a href="https://meet.google.com/puf-mxqk-iua">
              Link for the Prayer Room
            </a>
          </h3>
          <p>
            Phone number 02 8320 4510 with the pin 595 128 845 5210#
          </p>
          <h3>
            <a href="https://meet.google.com/vid-nozn-jbu">
              Link for Small Group Room 1
            </a>
          </h3>
          <p>
            Phone number 02 8320 4510 with the pin 784 725 569 7475#
          </p>
        </span>
      </div>
    );
  }
}

export default HomePageText;
