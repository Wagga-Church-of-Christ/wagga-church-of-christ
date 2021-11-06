import React from 'react';
import './HomePageSlide.scss'

const HomePageSlide = ({
  type,
  title,
  imageUrl,
  subtitle,
  url,
  // subsubtitle,
  buttonText = "A Button",
  target = "_self",
  internalLink = false,
  textColour = "text-white",
  fullHeightLink = false,
  backgroundPosition = "left"
}) => {

  const slideStyle = {
    background: "url(" + imageUrl + ")",
    backgroundPosition: backgroundPosition,
  }

  const buttonWrapperStyle = {
    textAlign: "center" as "center"
  }

  let hrStyle = {
    color: "white",
    borderColor: "white",
    backgroundColor: "white"
  }

  if (textColour === "text-dark") {
    hrStyle = {
      color: "black",
      borderColor: "black",
      backgroundColor: "black"
    }
  }

  let lowerSection;

  if (url && internalLink && !fullHeightLink) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <a href={url} role="button" className={`btn btn-outline-primary image-slide-button center-block ${textColour}`}>
          {buttonText}
        </a>
      </div>
    )
  } else if (url && !fullHeightLink) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <a role="button" target={target} className={`btn btn-outline-primary image-slide-button center-block ${textColour}`} href={url}>{buttonText}</a>
      </div>
    )
  } else {
    lowerSection = (
      <div>
        <hr style={hrStyle} />
      </div>
    )
  }

  const slideContents = (
    <div className="image-slide" style={slideStyle}>
      <div className="row image-slide-fullheight-row">
        <div className="col align-self-center image-slide-content">
        </div>
      </div>
    </div>
  );

  if (fullHeightLink) {
    return (
      <></>
    )
  } else {
    return slideContents;
  }

}

export default HomePageSlide;
