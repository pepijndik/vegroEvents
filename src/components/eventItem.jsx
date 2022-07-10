import { Component } from "react";
import { Link } from "react-router-dom";
import {calcDuration} from "../data/events";
class EventItem extends Component {
  
  render() {
    var moment = require('moment');
    const e = this.props.event;
    return (
      <div className="bg-white shadow-xl shadow-slate-200 dark:shadow-slate-800 rounded-lg">
        <div className="p-3 shadow bg-vg text-indigo-50 uppercase grid place-items-center rounded-t-lg">
          <div className="text-sm">{moment(e.start).format("dd - MMM")}</div>
          <div className="text-3xl font-bold">{moment(e.start).format("H:mm")}</div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
          <div className="grid gap-1">
            <p className="text-slate-400 text-sm">Duration: {calcDuration(e) }</p>
            <h2 className="font-bold text-2xl">
              <a href="{e.link}">{e.title}</a>
              {e.location !== "" ? (
                <p className="text-slate-400 text-sm">{e.location}</p>
              ) : (
                ""
              )}
            </h2>
            {e.description !== "" ? (
              <div className="grid gap-1">
                <button
                  className="text-slate-400 flex gap-1 items-center cursor-pointer"
                  aria-expanded="false"
                  aria-controls="description"
                >
                  <p className="pointer-events-none">See details</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 pointer-events-none transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="grid gap-1 hidden" hidden id="description">
                  <p className="text-slate-400">{e.description}</p>
                </div>
              </div>
            ) : (
              <div className="h-4 mb-2">No description aviable</div>
            )}
            <Link
               className="bg-vg rounded-md px-4 py-2 shadow-2xl  dark:shadow-none text-center font-bold hover:shadow-none text-white"
                to={`/event/${e.id}`}
              >View event</Link>
        
          </div>
        </div>
      </div>
    );
  }
}
export default EventItem;
