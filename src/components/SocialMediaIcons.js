import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="media-icons">
      <a className="col-2 facebook-logo icon" href="#fb">
        <img
          src="assets/IconCrc_Facebook.png"
          width="25"
          height="25"
          className="d-inline-block align-top"
          alt="facebook-icon"
        />
      </a>
      <a className="col-2 instagram-logo icon" href="#ig">
        <img
          src="assets/IconCrc_Instagram.png"
          width="25"
          height="25"
          className="d-inline-block align-top"
          alt="instagram-icon"
        />
      </a>
      <a className="col-2 twitter-logo icon" href="#tw">
        <img
          src="assets/IconCrc_Twitter.png"
          width="25"
          height="25"
          className="d-inline-block align-top"
          alt="twitter-icon"
        />
      </a>
      <a className="col-2 gplus-logo icon" href="#gp">
        <img
          src="assets/google-plus.png"
          width="25"
          height="25"
          className="d-inline-block align-top"
          alt="gplus-icon"
          id="gplus-icon"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
