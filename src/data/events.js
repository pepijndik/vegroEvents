var moment = require("moment"); // require
let events = [
  {
    id: 1,
    title: "Larafest",
    description: "Every thing about the newest version of Laravel, will be discussing the newest invoke albes and more",
    start: "2022-07-08T12:00:00",
    end: "2022-07-08T15:35",
    location: "lisse",
    image:
      "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    speakers: [
      {
        name: "Tayler otwell",
        socials: [
          {
            type: "twitter",
            url: "/tayler",
          },
        ],
      },
      {
        name: "Marcel de groot",
        socials: [
          {
            type: "twitter",
            url: "/MarceldGroot",
          },
        ],
      },
    ],
    max_attendees: 25,
    type: "Meetup",
  },
  {
    id: 2,
    title: "Vegrobotica",
    description: "Discussing the creations of a new inovation at vegro",
    start: "2022-07-12T10:00:00",
    end: "2022-07-10T10:35",
    location: "Katwijk",
    image:
      "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg",
    speakers: [
      {
        name: "Pepijn dik",
        socials: [
          {
            type: "twitter",
            url: "/pepijndik",
          },
        ],
      },
      {
        name: "Maurice de Jongh",
        socials: [
          {
            type: "facebook",
            url: "/Maurice",
          },
        ],
      },
    ],
    max_attendees: 2,
    type: "Virtual",
  },
  {
    id: 3,
    title: "React",
    description: "Who is building the nex big react frameworks? lets disguss",
    start: "2022-09-25T12:54:00",
    end: "2022-09-01T15:35",
    location: "Leiden",
    image:
      "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg",
    speakers: [
   
      {
        name: "Maurice de Jongh",
        socials: [
          {
            type: "facebook",
            url: "/Maurice",
          },
        ],
      },
    ],
    max_attendees: 2,
    type: "Location",
  },
  {
    id: 4,
    title: "wwdc22",
    description: "Introducing the new MacBook Air, 13‑inch MacBook Pro, iOS 16, iPadOS 16, macOS Ventura, and watchOS 9",
    start: "2022-09-01T09:00:00",
    end: "2022-09-01T15:35",
    location: "Online",
    image:
      "https://www.apple.com/v/apple-events/home/w/images/overview/hero__d6adldydsqye_xlarge.png",
    speakers: [
   
      {
        name: "Maurice de Jongh",
        socials: [
          {
            type: "facebook",
            url: "/Maurice",
          },
        ],
      },
    ],
    max_attendees: 2,
    type: "Location",
  },
];

function getEventById(id) {
  return events.find((x) => x.id == id);
}

function formatDate(date) {
  const newDate = new Date(date);

  return newDate;
}

function formatToString(date) {
  return moment(date).format("dddd, MMMM Do YYYY");
}

function calcDuration(event) {
  const end = moment(event.end);
  var duration = moment.duration(end.diff(event.start));
  return duration.humanize();
}
export { events, getEventById, formatDate, formatToString ,calcDuration};
