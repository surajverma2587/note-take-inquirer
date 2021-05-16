const inquirer = require("inquirer");
const moment = require("moment");

inquirer.registerPrompt("datepicker", require("inquirer-datepicker"));

const Bill = require("./lib/Bill");
const Event = require("./lib/Event");
const generateMarkup = require("./util/generateMarkup");
const writeToFile = require("./util/writeToFile");

let inProgress = true;

const notes = {
  bills: [],
  events: [],
  reminders: [],
};

const createBill = async () => {
  const billQuestions = [
    {
      type: "input",
      message: "What bill are you paying?",
      name: "message",
    },
    {
      type: "number",
      message: "What is the bill amount?",
      name: "amount",
    },
    {
      type: "datepicker",
      message: "When is the bill due?",
      name: "date",
    },
  ];

  const { message, amount, date } = await inquirer.prompt(billQuestions);

  const bill = new Bill("1", message, moment(date), amount);
  notes.bills.push(bill);
};

const createEvent = async () => {
  const eventQuestions = [
    {
      type: "input",
      message: "What event are you attending?",
      name: "message",
    },
    {
      type: "input",
      message: "What is the location of the event?",
      name: "location",
    },
    {
      type: "datepicker",
      message: "When is the event scheduled?",
      name: "date",
    },
  ];

  const { message, location, date } = await inquirer.prompt(eventQuestions);

  const event = new Event("1", message, moment(date), location);
  notes.events.push(event);
};

const prompt = async () => {
  const selectNoteTypeQuestion = [
    {
      type: "list",
      message: "Select the type of note you want to add:",
      choices: [
        {
          name: "Bill Note",
          value: "bill",
          short: "Bill",
        },
        {
          name: "Event Note",
          value: "event",
          short: "Event",
        },
        {
          name: "Reminder Note",
          value: "reminder",
          short: "Reminder",
        },
        {
          name: "None",
          value: "none",
          short: "None",
        },
      ],
      name: "noteType",
    },
  ];

  const { noteType } = await inquirer.prompt(selectNoteTypeQuestion);

  if (noteType === "bill") {
    await createBill();
  }

  if (noteType === "event") {
    await createEvent();
  }

  if (noteType === "reminder") {
    // ask bill questions here
    console.log("ask reminder questions here");
  }

  if (noteType === "none") {
    inProgress = false;
  }
};

const init = async () => {
  while (inProgress) {
    await prompt();
  }

  const markup = generateMarkup(notes);

  writeToFile(markup);
};

init();
