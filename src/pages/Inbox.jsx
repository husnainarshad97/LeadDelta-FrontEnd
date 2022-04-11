import React, { useState } from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BsTagFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import profileImg from "../images/profile_img.jpg";

function Inbox() {
  const [filter, setfilter] = useState("closed");
  const handleChange = () => {
    if (filter === "closed") {
      setfilter("opened");
    } else {
      setfilter("closed");
    }
  };
  return (
    <div className="inbox__container">
      <br />
      <div className="inbox__container__filter">
        <div className="inbox__container__filter__left">
          <button className="button">
            <AiTwotoneMessage /> New Message
          </button>{" "}
          <button className="button" disabled>
            <BsTagFill /> Apply Tag
          </button>
          <button className="button" disabled>
            <BsTagFill /> Pin
          </button>
          <button className="button" disabled>
            <BsTagFill /> Star
          </button>
          <button className="button" disabled>
            <BsTagFill /> Marks as read
          </button>
          <button className="button" disabled>
            <BsTagFill /> Archeive
          </button>
          <button className="button" disabled>
            <BsThreeDots />
          </button>
        </div>

        <div className="inbox__container__filter__right">
          <div className="inbox__container__filter__right__filter ">
            <button className="buttongroupL" onClick={handleChange}>
              <FaFilter className="button__buttonIcon" /> Filter
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          filter === "closed" ? "displayNone" : "inbox__container__filterInfo"
        }
      >
        <div>Filters (0)</div>{" "}
        <button className="inbox__container__filterInfo__savefilter">
          | Save Filters{" "}
        </button>{" "}
        <button className="inbox__container__filterInfo__clearfilter">
          {" "}
          Clear Filters{" "}
        </button>
      </div>

      <div
        className={
          filter === "closed" ? "displayNone" : "inbox__container__filterInputs"
        }
      >
        {/*  */}
        <div className="inbox__container__filterInputs__dropdown">
          <button className="inbox__container__filterInputs__dropdown__button">
            Pinned :{" "}
            <span className="inbox__container__filterInputs__dropdown__button__span">
              All
            </span>
            <svg
              class="arrow-down-svg"
              width="12"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.193.785.623-.6a.678.678 0 0 1 .932 0L6 4.253 10.252.185a.679.679 0 0 1 .932 0l.623.6a.617.617 0 0 1 0 .896l-5.34 5.133a.679.679 0 0 1-.933 0L.194 1.681a.617.617 0 0 1 0-.896z"
                fill="#8C96AD"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/*  */}
        <div className="inbox__container__filterInputs__dropdown">
          <button className="inbox__container__filterInputs__dropdown__button">
            Starred :{" "}
            <span className="inbox__container__filterInputs__dropdown__button__span">
              All
            </span>
            <svg
              class="arrow-down-svg"
              width="12"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.193.785.623-.6a.678.678 0 0 1 .932 0L6 4.253 10.252.185a.679.679 0 0 1 .932 0l.623.6a.617.617 0 0 1 0 .896l-5.34 5.133a.679.679 0 0 1-.933 0L.194 1.681a.617.617 0 0 1 0-.896z"
                fill="#8C96AD"
                fill-rule="evenodd"
              ></path>
            </svg>{" "}
          </button>
        </div>
        {/*  */}
        <div className="inbox__container__filterInputs__dropdown">
          <button className="inbox__container__filterInputs__dropdown__button">
            Read :{" "}
            <span className="inbox__container__filterInputs__dropdown__button__span">
              All
            </span>
            <svg
              class="arrow-down-svg"
              width="12"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.193.785.623-.6a.678.678 0 0 1 .932 0L6 4.253 10.252.185a.679.679 0 0 1 .932 0l.623.6a.617.617 0 0 1 0 .896l-5.34 5.133a.679.679 0 0 1-.933 0L.194 1.681a.617.617 0 0 1 0-.896z"
                fill="#8C96AD"
                fill-rule="evenodd"
              ></path>
            </svg>{" "}
          </button>
        </div>
        {/*  */}
        <div className="inbox__container__filterInputs__dropdown">
          <button className="inbox__container__filterInputs__dropdown__button">
            Tag :{" "}
            <span className="inbox__container__filterInputs__dropdown__button__span">
              Show All
            </span>
            <svg
              class="arrow-down-svg"
              width="12"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.193.785.623-.6a.678.678 0 0 1 .932 0L6 4.253 10.252.185a.679.679 0 0 1 .932 0l.623.6a.617.617 0 0 1 0 .896l-5.34 5.133a.679.679 0 0 1-.933 0L.194 1.681a.617.617 0 0 1 0-.896z"
                fill="#8C96AD"
                fill-rule="evenodd"
              ></path>
            </svg>{" "}
          </button>
        </div>
        {/*  */}
        <div className="inbox__container__filterInputs__dropdown">
          <button className="inbox__container__filterInputs__dropdown__button">
            Archeived :{" "}
            <span className="inbox__container__filterInputs__dropdown__button__span">
              All
            </span>
            <svg
              class="arrow-down-svg"
              width="12"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.193.785.623-.6a.678.678 0 0 1 .932 0L6 4.253 10.252.185a.679.679 0 0 1 .932 0l.623.6a.617.617 0 0 1 0 .896l-5.34 5.133a.679.679 0 0 1-.933 0L.194 1.681a.617.617 0 0 1 0-.896z"
                fill="#8C96AD"
                fill-rule="evenodd"
              ></path>
            </svg>{" "}
          </button>
        </div>
        {/*  */}
      </div>
      {/* end filter inputs */}

      {/* inbox names start */}
      <div
        className={`inbox__container__messages ${
          filter === "closed"
            ? "inbox__container__messages"
            : "inbox__container__messagessmall"
        }`}
      >
        <div className="inbox__container__messages__sidebar">
          <div className="inbox__container__messages__sidebar__search">
            <input
              className="inbox__container__messages__sidebar__search__searchbar"
              type="text"
              placeholder="Search messages.."
              name="search"
            />
            <button
              className="inbox__container__messages__sidebar__search__searchbarIcon"
              type="submit"
            >
              <BsSearch />
            </button>
          </div>

          <div className="inbox__container__messages__sidebar__contacts">
            <div
              className="inbox__container__messages__sidebar__contacts__contact"
              style={{ backgroundColor: "#868dee" }}
            >
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Hasnain Arshad
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  Congrats you on anniverssary{" "}
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Ali Hassan
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Abu Bakar
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Ibn e Batuta
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Khalid
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    M Ali Khan
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
            <div className="inbox__container__messages__sidebar__contacts__contact">
              <div className="inbox__container__messages__sidebar__contacts__contact__checkbox">
                <input
                  className="inbox__container__messages__sidebar__contacts__contact__checkbox__check-box"
                  type="checkbox"
                />
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />{" "}
              </div>
              <div className="inbox__container__messages__sidebar__contacts__contact__info">
                <div className="inbox__container__messages__sidebar__contacts__contact__info__heading">
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__name">
                    Hasnain Arshad
                  </div>{" "}
                  <div className="inbox__container__messages__sidebar__contacts__contact__info__heading__date">
                    March 22 2022
                  </div>
                </div>
                <p className="inbox__container__messages__sidebar__contacts__contact__info__subheading">
                  he is a boy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inbox__container__messages__content">
          <div className="inbox__container__messages__content__header">
            <div className="inbox__container__messages__content__header__left">
              <div className="inbox__container__messages__content__header__left__profileimg">
                <img
                  src={profileImg}
                  style={{ width: 45, borderRadius: 100 }}
                  alt="profile img"
                />
              </div>
              <div className="inbox__container__messages__content__header__left__info">
                <div className="inbox__container__messages__content__header__left__info__heading">
                  Hasnain Arshad
                </div>
                <div className="inbox__container__messages__content__header__left__info__subheading">
                  {" "}
                  Seo expert | React Developer
                </div>
              </div>
            </div>
            <div className="inbox__container__messages__content__header__right">
              <div>
                <button className="button" disabled>
                  <AiTwotoneMessage /> Message
                </button>{" "}
                <button className="button" disabled>
                  <BsTagFill /> Apply Tag
                </button>
                <button className="button" disabled>
                  <BsThreeDots />
                </button>
              </div>
            </div>
          </div>
          <div className="inbox__container__messages__content__texts">
            <div className="inbox__container__messages__content__texts__recieved">
              <div>recieved message</div>
              <div>
                <div>profile img</div>
                <div>name</div>
                <div>date</div>
              </div>
            </div>

            <div className="inbox__container__messages__content__texts__sent">
              <div>sent message</div>
              <div>
                <div>profile img</div>
                <div>name</div>
                <div>date</div>
              </div>
            </div>

            <div className="inbox__container__messages__content__texts__writemsg">
              <div className="inbox__container__messages__content__texts__writemsg__input__inputfield">
                <input
                  className="inbox__container__messages__content__texts__writemsg__input__inputfield"
                  type="text"
                />
              </div>
              <div className="inbox__container__messages__content__texts__writemsg__input__inputfieldoptions">
                <div>files</div>
                <div>emoji</div>
                <button>send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* inbox names end*/}

      {/*message text start*/}
      {/* messages text end */}
      <div className="inbox__container__getStarted">
        <div className="inbox__container__getStarted__icon">
          <TiTickOutline className="inbox__container__getStarted__icon__icon" />
        </div>
        <div className="inbox__container__getStarted__text">Get Started</div>
      </div>
      <div className="inbox__container__pic"></div>
    </div>
  );
}

export default Inbox;
