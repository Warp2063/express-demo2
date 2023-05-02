var beasts = require("./beasts.json");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

function findBeastsByParam(paramName, value, searchArray) {
  let searchIn = searchArray ? searchArray : beasts;

  return searchIn.filter((beast) => {
    return beast[paramName] == value;
  });
}

//console.log(findBeastsByParam("horns", 3));

// "_id": 6,
//     "image_url": "https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg",
//     "title": "#truth",
//     "description": "The truth behind narwhals",
//     "keyword": "narwhal",
//     "horns": 1

// root endpoint
app.get("/", (request, response) => {
  response.json("Express.js Demo API - Serving up Horned Beasts!");
});

// using request.query (? style), supports multiple props
app.get("/beasts", (request, response) => {
  // return all data
  let returnSet = beasts;
  // if keyword is specified in the query, return only those
  console.log("searching by request.query, using props: ");
  for (var prop in request.query) {
    console.log(" - " + prop + " : " + request.query[prop]);
  }
  //console.table(request.query);

  // ---- SEARCH LOGIC

  for (var prop in request.query) {
    returnSet = findBeastsByParam(prop, request.query[prop], returnSet);
  }
  response.json(returnSet);
});

// using request.params for keyword
app.get("/beasts/keyword/:keyword", (request, response) => {
  console.log("searching by request.param.keyword: " + request.params.keyword);
  const beasts = findBeastsByParam("keyword", request.params.keyword);
  response.json(beasts);
});

// using request.params for quantity of horns
app.get("/beasts/horns/:numHorns", (request, response) => {
  console.log("searching by request.param.horns: " + request.params.numHorns);
  const beasts = findBeastsByParam("horns", request.params.numHorns);
  response.json(beasts);
});

app.listen(PORT, () => {
  console.log("App is listening on PORT " + PORT);
});
