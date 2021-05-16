const { v4: uuidv4 } = require("uuid");

class Note {
  constructor(message, date) {
    this.id = uuidv4();
    this.message = message;
    this.date = date;
  }

  getFormattedDate() {
    return this.date.format("ddd, Do MMMM, YYYY");
  }
}

module.exports = Note;
