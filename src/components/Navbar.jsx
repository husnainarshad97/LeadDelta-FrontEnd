import React from "react";
import Logo from "../images/lead-delta_logo.png";
import profileImg from "../images/profile_img.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar__container">
      <ul className="navbar__container__links">
        <li className="navbar__container__links__logo">
          <img
            className="navbar__container__links__logo__img"
            src={Logo}
            alt="logo"
          />
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/">
            Connect
          </Link>
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/inbox">
            Inbox
            {/* <span className="navbar__container__links__link__beta">BETA</span> */}
          </Link>
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/tags">
            Tags{" "}
          </Link>
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/templates">
            Templates
          </Link>
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/integrations">
            Integration
          </Link>
        </li>
        <li>
          <Link className="navbar__container__links__link" to="/activitylog">
            Activity Log
          </Link>
        </li>
      </ul>

      <div className="navbar__container__infos">
        <div className="navbar__container__infos__info">
          <div className="navbar__container__infos__info__heading">
            Connection Updated:
          </div>
          <div className="navbar__container__infos__info__answer">143(143)</div>
        </div>

        <div className="navbar__container__infos__info">
          <div className="navbar__container__infos__info__heading">
            Last Sync:
          </div>
          <div className="navbar__container__infos__info__answer">
            {" "}
            Mar 1, 2022 at 19:58
          </div>
        </div>

        <div className="navbar__container__infos__info">
          <div className="navbar__container__infos__info__heading">
            Trial end in 5 days{" "}
          </div>
          <div className="navbar__container__infos__info__upgrade">
            Upgrade Now
          </div>
        </div>
      </div>

      <div className="navbar__container__icons">
        <div className="navbar__container__icons__refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="#16D090"
              fill-rule="evenodd"
              d="M13.672 6.135c.181 0 .328-.147.328-.329V.328C14 .147 13.853 0 13.672 0h-1.295c-.181 0-.328.147-.328.328v.016l.11 2.263C11.04 1.289 8.73.219 7.002.219h-.008C3.684.219.927 2.595.336 5.737c-.003.017-.005.043-.005.06 0 .181.147.328.328.328h1.34c.144 0 .287-.114.32-.253.49-2.033 2.585-3.683 4.676-3.683 1.415 0 3.203.952 3.992 2.126l-2.774-.133h-.016c-.181 0-.328.147-.328.328v1.296c0 .182.147.329.328.329h5.475zM1.623 14c.181 0 .328-.147.328-.328v-.017l-.113-2.257c1.117 1.315 3.425 2.383 5.15 2.383h.007c3.312 0 6.069-2.376 6.66-5.518.003-.017.005-.043.005-.06 0-.181-.147-.328-.328-.328h-1.341c-.143 0-.286.114-.32.253-.488 2.034-2.583 3.684-4.674 3.684H6.99c-1.414 0-3.2-.953-3.988-2.127l2.784.133h.015c.159 0 .291-.112.322-.261l.006-.067V8.194c0-.181-.147-.328-.328-.328H.328c-.181 0-.328.147-.328.328v5.478c0 .181.147.328.328.328h1.295z"
            ></path>
          </svg>
        </div>
        <div className="navbar__container__icons__invite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <path
              fill="#FDBE00"
              fill-rule="evenodd"
              d="M7 8c2.21 0 4-1.79 4-4S9.21 0 7 0 3 1.79 3 4s1.79 4 4 4zm10 3c.275 0 .5-.225.5-.5v-2h2c.275 0 .5-.225.5-.5V7c0-.275-.225-.5-.5-.5h-2v-2c0-.275-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5v2h-2c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h2v2c0 .275.225.5.5.5h1zm-4.5 5c.828 0 1.5-.672 1.5-1.5v-1.3C14 10.881 12.119 9 9.8 9h-.522c-.694.319-1.466.5-2.278.5-.813 0-1.581-.181-2.278-.5H4.2C1.881 9 0 10.881 0 13.2v1.3c0 .828.672 1.5 1.5 1.5h11z"
            ></path>
          </svg>
        </div>
        <div className="navbar__container__icons__profile">
          <img
            src={profileImg}
            style={{ width: 32, borderRadius: 100 }}
            alt="profile img"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
