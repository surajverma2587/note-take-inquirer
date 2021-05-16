const fs = require("fs");

const writeToFile = (data) => {
  try {
    fs.writeFileSync("notes.html", data);
    console.log("Notes generated successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
