import * as React from "react";
import { useParams } from "react-router-dom";
import NoMatch from "./noMatch";
import { Link } from "react-router-dom";
import { getEventById, events,formatDate, formatToString,calcDuration} from "../data/events";

function EventDetial() {
  var moment = require('moment');
  let { id } = useParams();

  if (!id) {
    return <NoMatch />;
  }
  let event = getEventById(id);
  if (event == typeof undefined || !event) {
    return <NoMatch />;
  }
 
  
  const speakers = [];

  event.speakers.forEach((speaker) => {
    speakers.push(
      <div key={speaker.name} className="flex flex-col sm:table-row">
        <div className="pr-6 font-semibold sm:table-cell lg:pr-10">
          speaker:
        </div>{" "}
        <div className="sm:table-cell ">{speaker.name}</div><br></br>
    
      </div>
    );
  });

  return (
    <article>
      <img
        alt=""
        src={event.image}
        className="object-coveÍr w-full h-96 lg:h-[48rem] mb -mt-32"
      />
      <div className="relative w-full lg:w-11/12 lg:mx-auto bg-white lg:-mt-64 min-h-[10rem] px-6 sm:px-0 lg:p-10 z-10">
        <div className="w-full 2xl:w-2/3 3xl:w-1/2 mt-02">
          <h1 className="text-3xl mb-2">{event.title}</h1>
          <div className="set">{event.description}</div>{" "}
          <div className="h-10 border-b border-tertiary-dark opacity-20 mb-half"></div>
        </div>{" "}
        <div className="block-base flex flex-col p-6 lg:p-10 pb-12 bg-white shadow-custom w-full  w-screen -ml-6 sm:ml-0 sm:w-fit mb-half !pb-6 lg:!pb-10">
          <div className="flex flex-col space-y-6 sm:table">
          <div className="flex flex-col sm:table-row">
              <div className="pr-6 font-semibold sm:table-cell lg:pr-10">
                Duration
              </div>{" "}
              <div className="sm:table-cell ">{calcDuration(event)}</div>
            </div>{" "}
            <div className="flex flex-col sm:table-row">
              <div className="pr-6 font-semibold sm:table-cell lg:pr-10">
                Soort event
              </div>{" "}
              <div className="sm:table-cell ">{event.type}</div>
            </div>{" "}
            <div className="flex flex-col sm:table-row">
              <div className="font-semibold sm:table-cell">Datum</div>{" "}
              <div className="sm:table-cell ">
                <span className="capitalize whitespace-nowrap">{}</span>{formatToString(formatDate(event.start))} 
              </div>
            </div>{" "}
            <div className="flex flex-col sm:table-row">
              <div className="pr-6 font-semibold sm:table-cell lg:pr-10"></div>{" "}
              <div className="sm:table-cell ">{moment(event.start).format("H:mm")}- {moment(event.end).format("H:mm")}</div>
            </div>{" "}
            <div className="flex flex-col sm:table-row">
              <div className="pr-6 font-semibold sm:table-cell lg:pr-10">
                Locatie
              </div>{" "}
              <div className="sm:table-cell ">{event.location}</div>
            </div>{" "}
            {speakers}
          </div>
        </div>{" "}
        <div className="flex mx-auto mb">
          <Link
            to="/signup"
            className="relative flex h-12 items-center justify-center group "
          >
            <div className="text-xs uppercase whitespace-nowrap px-8 font-bold flex items-center justify-center w-full h-full transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 z-20 bg-vg text-white ">
              Inschrijven
            </div>{" "}
            <div className="absolute bottom-0 right-0 w-full h-full border z-10 border-primary-accent "></div>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default EventDetial;
