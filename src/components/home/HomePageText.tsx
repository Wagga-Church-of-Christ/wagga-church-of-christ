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
        <div className="col-md homepage-text about">
          <iframe id="youtube_video" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="col-md homepage-text vision">
          <h3>We're delighted you've dropped in to our site!</h3>
          <hr />
          <p>
            Our Mission Statement is Growing together In Christ to Impact Our
            World. We take this seriously and believe that as Christians, we
            impact the world around us better when we continue to grow in
            the likeness and character of Jesus Christ.
        </p>
          <p>
            If you'd like to know more details around who we are and what
            we believe, or if you’re not familiar with the Australian
            Churches of Christ, then please visit our About us section
            where you will be reassured that we are indeed a Bible believing,
            Gospel teaching Church. Hope to see you soon and I am excited by
            what God will bring to the fellowship through the gifts He has given you.
        </p>
          <p>
            The Lord Bless You, <i>Pastor Ross Brinkman</i>
          </p>
        </div>
      </div>
    );
  }
}

export default HomePageText;
