const Note = require("./Note");

class Reminder extends Note {
  constructor(id, message, date, time) {
    super(id, message, date);

    this.time = time;
  }

  getFormattedTime() {
    return `Reminder set for time: ${this.time.format("HH:mm")}`;
  }
}

module.exports = Reminder;
