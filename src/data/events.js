var moment = require("moment"); // require
let events = [
  {
    id: 1,
    title: "Larafest",
    description: "Every thing about the newest version",
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
    ],
    max_attendees: 25,
    type: "Meetup",
  },
  {
    id: 2,
    title: "Test",
    description: "A test event",
    start: "2022-07-10T10:00:00",
    end: "2022-07-10T15:35",
    location: "Noordwijk",
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
    ],
    max_attendees: 2,
    type: "Virtual",
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
