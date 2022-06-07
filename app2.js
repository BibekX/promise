let axios = require("axios").default;

let api1 = axios("https://restcountries.com/v3.1/name/france");
let api2 = axios("https://restcountries.com/v3.1/name/italy");

Promise.all([api1, api2]).then(([data1, data2]) => {
  console.log("data1", data1.data[0].population);
  console.log("data2", data2.data[0].population);
});
