import React, { Component } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

export default class ContactBody extends Component {
  render() {
    return (
      <div className="ContactBody">
        <div className="contact-info">
          <div className="contact-info-title">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className="contact-info-detail">
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faHome} className="contact-icon" />
              <p className="contact-info-title2">ADDRESS</p>
              <p>Ô 23 Lô 3 Đền Lừ 2 Hoàng Mai Hà Nội</p>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <p className="contact-info-title2">phone</p>
              <p>+84 899150620</p>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faMailBulk} className="contact-icon" />
              <p className="contact-info-title2">email</p>
              <p>minhthanhneu2000@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
