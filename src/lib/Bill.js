const Note = require("./Note");

class Bill extends Note {
  constructor(id, message, date, amount) {
    super(id, message, date);

    this.amount = amount;
  }

  getFormattedAmount() {
    return `Amount to pay: £${this.amount}`;
  }
}

module.exports = Bill;
