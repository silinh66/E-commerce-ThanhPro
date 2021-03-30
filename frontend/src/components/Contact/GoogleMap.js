import React, { Component } from "react";
import "../../App.css";

class GoogleMap extends Component {
  render() {
    return (
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.190150726645!2d105.85347276482392!3d20.985013536022084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac159ee98855%3A0xa43d2d72d7ccaf75!2zaOG7kyDEkOG7gW4gTOG7qw!5e0!3m2!1sen!2s!4v1617101290364!5m2!1sen!2s"
          width="100%"
          height="100%"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    );
  }
}

export default GoogleMap;
