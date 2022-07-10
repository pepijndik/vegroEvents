import { Component } from "react";
import EventItem from "./eventItem";
import {events} from "../data/events";
class EventList extends Component {
  
  render() {
    let eventItems = [];
    events.forEach(event => {
      eventItems.push(
        <EventItem key={event.id} event={event}></EventItem>
      )
    });
    return (
      <div className="grid place-items-center">
        <h1 className="text-3xl text-vb font-bold">
          Vegro events
        </h1>
        <div className="mt-6 grid grid-cols-4 gap-4">
       {eventItems}
        </div>
      </div>
    );
  }
}
export default EventList;
