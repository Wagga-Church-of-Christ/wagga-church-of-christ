import React from 'react';
import './HomePageText.scss';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col-md homepage-text about">
        <h3>A TITLE</h3>
        <hr />
        <p>Some text.</p>
      </div>
      <div className="col-md homepage-text vision">
        <h3>ANOTHER TITLE</h3>
        <hr />
        <p>Some more text.</p>
      </div>
    </div>
  );
}

export default HomePageText;
