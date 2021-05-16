const Note = require("./Note");

class Event extends Note {
  constructor(id, message, date, time, location) {
    super(id, message, date);

    this.time = time;
    this.location = location;
  }

  getFormattedTime() {
    return `Event starts at ${this.time.format("HH:mm:ss")}`;
  }

  getFormattedLocation() {
    return `${this.message} will take place at ${this.location}`;
  }
}

module.exports = Event;
