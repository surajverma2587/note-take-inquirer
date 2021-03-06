const Note = require("./Note");

class Event extends Note {
  constructor(message, date, location) {
    super(message, date);

    this.location = location;
  }

  getFormattedDateTime() {
    return `Event starts at ${this.date.format("HH:mm")} on ${this.date.format(
      "ddd, Do MMMM, YYYY"
    )}`;
  }

  getFormattedLocation() {
    return `${this.message} will take place at ${this.location}`;
  }
}

module.exports = Event;
