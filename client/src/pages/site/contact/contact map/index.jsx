import React from "react";
import "./index.scss";
const ContactMap = () => {
  return (
    <div className="contact-map">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://2yu.co">2yu</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:100%;width:100%;}",
            }}
          />
          <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
