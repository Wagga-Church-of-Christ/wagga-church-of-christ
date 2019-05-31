import React from 'react';
import './PageBanner.scss'

const PageBanner = (props) => {

  const style = {
    background: "url(" + props.imageUrl + ")",
    color: props.titleColour
  }

  var className = "page-banner-mobile-center";

  if (props.bannerMobilePosition === "right") {
    className = "page-banner-mobile-right"
  }

  return (
    <div className={"page-banner " + className} style={style}>
      <div className="row">
        <div className="col align-self-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
