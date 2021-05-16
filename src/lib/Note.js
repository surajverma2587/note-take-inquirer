class Note {
  constructor(id, message, date) {
    this.id = id;
    this.message = message;
    this.date = date;
  }

  getFormattedDate() {
    return this.date.format("DDD, Do MMMM, YYYY");
  }
}

module.exports = Note;
