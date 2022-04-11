import React, { useState } from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsTagFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { TiTickOutline } from "react-icons/ti";

function Connections() {
  const [filter, setfilter] = useState("closed");
  const handleChange = () => {
    if (filter === "closed") {
      setfilter("opened");
    } else {
      setfilter("closed");
    }
  };
  return (
    <div className="connection__container">
      <br />
      <h1>Template</h1>

      <div className="connection__container__filter">
        <div className="connection__container__filter__left">
          <button className="button" disabled>
            <AiTwotoneMessage /> Message
          </button>{" "}
          <button className="button" disabled>
            <BsTagFill /> Apply Tag
          </button>
          <button className="button" disabled>
            <BsThreeDots />
          </button>
          <div className="divider">|</div>
          <button className="button">
            <FaDownload className="button__buttonIcon" /> Export
          </button>
        </div>

        <div className="connection__container__filter__right">
          <div className="connection__container__filter__right__selectPage">
            <label
              className="connection__container__filter__right__selectPage__label "
              for="pages"
            >
              Page 1 to 3{" "}
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
            </label>
          </div>
          <div className="divider">|</div>
          <div className="connection__container__filter__right__page">
            <div> 1-50 of 143</div>
            <button className="button">
              <MdOutlineArrowBackIosNew className="button__buttonIcon" />
            </button>
            <button className="button">
              <MdOutlineArrowForwardIos className="button__buttonIcon" />
            </button>
          </div>
          <div className="connection__container__filter__right__search">
            <form>
              <input
                className="connection__container__filter__right__search__searchbar"
                type="text"
                placeholder="Search by name.."
                name="search"
              />
              <button
                className="connection__container__filter__right__search__searchbar"
                type="submit"
              >
                <BsSearch />
              </button>
            </form>
          </div>

          <div className="connection__container__filter__right__filter ">
            <button className="buttongroupL" onClick={handleChange}>
              <FaFilter className="button__buttonIcon" /> Filter
            </button>
            <button className="buttongroupR">
              {" "}
              <FaAngleDown />{" "}
            </button>
          </div>
          <div>
            <button className="button">
              <FaSort className="button__buttonIcon" />
            </button>
          </div>
          <div>
            <button className="button">
              <FaColumns className="button__buttonIcon" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          filter === "closed"
            ? "displayNone"
            : "connection__container__filterInfo"
        }
      >
        <div>Filters (0)</div>{" "}
        <button className="connection__container__filterInfo__savefilter">
          | Save Filters{" "}
        </button>{" "}
        <button className="connection__container__filterInfo__clearfilter">
          {" "}
          Clear Filters{" "}
        </button>
      </div>
      <br />
      <div
        className={
          filter === "closed"
            ? "displayNone"
            : "connection__container__filterInputs"
        }
      >
        {/*  */}

        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            <FaAngleDown /> From Date - To Date :{" "}
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Hidden Connection :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
              No
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

        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Tag :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Exclude Tag :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
              No
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Languages :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Note :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Already Contacted :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Industry :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
              All Industries
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
        <div className="connection__container__filterInputs__search">
          <form>
            <input
              className="connection__container__filterInputs__search__searchbar"
              type="text"
              placeholder="Search by name.."
              name="search"
            />
            <button
              className="connection__container__filterInputs__search__searchbar"
              type="submit"
            >
              <BsSearch />
            </button>
          </form>
        </div>
        {/*  */}
        <div className="connection__container__filterInputs__search">
          <form>
            <input
              className="connection__container__filterInputs__search__searchbar"
              type="text"
              placeholder="Search by name.."
              name="search"
            />
            <button
              className="connection__container__filterInputs__search__searchbar"
              type="submit"
            >
              <BsSearch />
            </button>
          </form>
        </div>
        {/*  */}
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Following :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
        <div className="connection__container__filterInputs__dropdown">
          <button className="connection__container__filterInputs__dropdown__button">
            Conatact Info :{" "}
            <span className="connection__container__filterInputs__dropdown__button__span">
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
      <br />
      {/* table start */}
      <div
        className={`connection__container__tableContainer ${
          filter === "closed"
            ? "connection__container__tableContainer"
            : "connection__container__tableContainersmall"
        }`}
      >
        <table className="connection__container__tableContainer__table">
          <thead className="connection__container__tableContainer__table__thead">
            <th className="connection__container__tableContainer__table__thead__th">
              <div>
                <input type="checkbox" /> <span> MSG </span> <span> NOTE </span>
              </div>
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              NAME
            </th>
            <th className="connection__container__tableContainer__table__thead__th ">
              HEADLINE & JOB TITLE
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              COMPANY
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              LOCATION
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              CONTACT INFO
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              TAGS{" "}
            </th>
            <th className="connection__container__tableContainer__table__thead__th">
              ACTIONS
            </th>
          </thead>
          <br />
          <tbody className="connection__container__tableContainer__table__tbody">
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hasnain Arshad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                UpWork
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Lahore
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Jawad Khan
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# JAVA C++ Developer|
                Fluttering with Dart{" "}
                <div className="grey"> New Seller Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03445566778
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hamza Bhatti
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hamza Abbasi
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                UpWork
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Lahore
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03466646578
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Ali Hamza
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Muddassir
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Lahore
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Abdur Rehman
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hasnain Arshad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hasnain Arshad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Lahore
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hasnain Arshad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Islamabad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
            {/*  */}
            <tr className="connection__container__tableContainer__table__tbody__tr">
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                <div className="connection__container__tableContainer__table__tbody__tr__td__div">
                  <input type="checkbox" />{" "}
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M.75 14c1.922 0 3.437-.803 4.347-1.447C6 12.837 6.975 13 8 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0C3.581 0 0 2.91 0 6.5c0 1.487.622 2.85 1.653 3.947-.466 1.231-1.434 2.275-1.45 2.287-.206.22-.262.538-.144.813.12.275.391.453.691.453zm1.684-1.766c.228-.378.45-.803.622-1.256l.332-.878-.644-.681C2.178 8.816 1.5 7.819 1.5 6.5c0-2.756 2.916-5 6.5-5s6.5 2.244 6.5 5-2.916 5-6.5 5c-.834 0-1.66-.128-2.45-.378l-.71-.225-.609.431c-.447.316-1.06.669-1.797.906z"
                    ></path>
                  </svg>
                  <svg
                    class="sc-koaBrS bArBcH svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      class="svg-path"
                      fill="#8C96AD"
                      fill-rule="evenodd"
                      d="M14.879 19c.343 0 .818-.197 1.06-.44l2.622-2.621c.242-.243.439-.718.439-1.06V6.5c0-.828-.672-1.5-1.5-1.5h-11C5.672 5 5 5.672 5 6.5v11c0 .828.672 1.5 1.5 1.5h8.379zM13.5 17.5h-7v-11h11v7h-3.25c-.414 0-.75.335-.75.75v3.25zm1.5-.122V15h2.379L15 17.378z"
                      transform="translate(-107 -578) translate(30 120) translate(0 88) translate(0 352) translate(72 13)"
                    ></path>
                  </svg>
                  <img
                    className="connection__container__tableContainer__table__tbody__tr__td__div__img"
                    src="https://picsum.photos/200/200?random=2"
                    alt=""
                  />
                </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td bold">
                Hasnain Arshad
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Software Engineer| Freelancer| Java && C# Developer| Fluttering
                with Dart <div className="grey"> Level 2 Seller </div>
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Fiverr
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                Lahore
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                03404340830
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td">
                no tags
              </td>
              <td className="connection__container__tableContainer__table__tbody__tr__td grey">
                <HiDotsHorizontal />
              </td>
            </tr>
            {/*  */}
          </tbody>
        </table>
      </div>
      {/* table end */}
      <div className="connection__container__getStarted">
        <div className="connection__container__getStarted__icon">
          <TiTickOutline className="connection__container__getStarted__icon__icon" />
        </div>
        <div className="connection__container__getStarted__text">
          Get Started
        </div>
      </div>
      <div className="connection__container__pic"></div>
    </div>
  );
}

export default Connections;
