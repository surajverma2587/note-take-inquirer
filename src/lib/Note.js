const moment = require("moment");

class Note {
  constructor(id, message, date) {
    this.id = id;
    this.message = message;
    this.date = date;
  }

  getFormattedDate() {
    return moment(this.date).format("ddd, Do MMMM, YYYY");
  }
}

module.exports = Note;
