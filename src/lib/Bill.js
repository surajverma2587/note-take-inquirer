const Note = require("./Note");

class Bill extends Note {
  constructor(message, date, amount) {
    super(message, date);

    this.amount = amount;
  }

  getFormattedAmount() {
    return `Amount to pay: £${this.amount}`;
  }
}

module.exports = Bill;
