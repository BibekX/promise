const fs = require("fs");
const axios = require("axios").default;

fs.readFile(__dirname + "/read.txt", (err, data) => {
  if (err) {
    console.log("error when reading", err);
  } else {
    fs.writeFile(__dirname + "/write.txt", data, (err) => {
      if (err) {
        console.log("error when writing on write.txt", err);
      }
      let newData = data + " edited";
      fs.writeFile(__dirname + "/writeEdit.txt", newData, (err) => {
        if (err) {
          console.log("error when writing on writeEdit.txt", err);
        }
      });
    });
  }
});

new Promise((resolve, reject) => {
  fs.readFile(__dirname + "/read.txt", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
})
  .then((data) => {
    fs.writeFile(__dirname + "/write.txt", data, (err) => {
      if (err) {
        Error(err);
      }
      return data;
    });
  })
  .then((data) => {
    let newData = data + " edited";
    fs.writeFile(__dirname + "/writeEdit.txt", newData, (err) => {
      if (err) {
        Error("error when writing on writeEdit.txt", err);
      }
    });
  });
