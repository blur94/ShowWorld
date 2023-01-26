import React from "react";
import "./SiteAdminSidebar.css";
import { FiUsers, FiMail } from "react-icons/fi";
import { HiOutlineTicket, HiDocumentReport } from "react-icons/hi";
import { RiVipLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { GiTatteredBanner } from "react-icons/gi";
import {
  MdOutlineEventAvailable,
  MdMovie,
  MdOutlineAdminPanelSettings,
  MdTheaters,
  MdOutlineEventSeat,
  MdBlock,
  MdSchedule,
  MdEditLocation,
  MdManageAccounts,
  MdSettings,
  MdContentCut
} from "react-icons/md";

export default function SiteAdminSidebar({ setMainView }) {
  return (
    <div>
      <ul className="gil_sa_sidebar_list_container">
        <li onClick={() => setMainView('users')}>
          <span>
            <FiUsers />
          </span>
          <span>Users</span>
        </li>
        <li onClick={() => setMainView('events')}>
          <span>
            <MdOutlineEventAvailable />
          </span>
          <span>Events</span>
        </li>
        <li onClick={() => setMainView('movies')}>
          <span>
            <MdMovie />
          </span>
          <span>Movie</span>
        </li>
        <li onClick={() => setMainView('theater')}>
          <span>
            <MdOutlineAdminPanelSettings />
          </span>
          <span>Theater Admin</span>
        </li>
        <li>
          <span>
            <MdTheaters />
          </span>
          <span>Theater</span>
        </li>
        <li>
          <span>
            <MdOutlineEventSeat />
          </span>
          <span>Seating Rows</span>
        </li>
        <li>
          <span>
            <RiVipLine />
          </span>
          <span>Class</span>
        </li>
        <li>
          <span>
            <MdBlock />
          </span>
          <span>Seat Blocking</span>
        </li>
        <li>
          <span>
            <MdSchedule />
          </span>
          <span>Movie Schedule</span>
        </li>
        <li>
          <span>
            <HiOutlineTicket />
          </span>
          <span>Book Tickets</span>
        </li>
        <li>
          <span>
            <MdEditLocation />
          </span>
          <span>Location</span>
        </li>
        <li>
          <span>
            <FaRegNewspaper />
          </span>
          <span>News</span>
        </li>
        <li>
          <span>
            <GiTatteredBanner />
          </span>
          <span>Banner Ads</span>
        </li>
        <li>
          <span>
            <FiMail />
          </span>
          <span>NewsLetter</span>
        </li>
        <li>
          <span>
            <MdManageAccounts />
          </span>
          <span>Booking</span>
        </li>
        <li>
          <span>
            <HiDocumentReport />
          </span>
          <span>Reports</span>
        </li>
        <li>
          <span>
            <MdSettings />
          </span>
          <span>Site Settings</span>
        </li>
        <li>
          <span>
            <MdContentCut />
          </span>
          <span>CMS</span>
        </li>
      </ul>
    </div>
  );
}
