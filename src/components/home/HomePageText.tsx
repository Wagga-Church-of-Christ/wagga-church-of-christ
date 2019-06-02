import React from 'react';
import './HomePageText.scss';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col-md homepage-text about">
        <h3>We're delighted you've dropped in to our site!</h3>
        <hr />
        <p>Our Mission Statement is Growing together In Christ to Impact Our
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
      <div className="col-md homepage-text vision">
        {/* <h3>ANOTHER TITLE</h3>
        <hr />
        <p>Some more text.</p> */}
      </div>
    </div>
  );
}

export default HomePageText;
