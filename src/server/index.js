const dotenv = require("dotenv");
dotenv.config();

console.log("Your API key is ${process.env.API_KEY}");

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();
const axios = require("axios");
app.use(express.json());

app.use(express.static("dist"));

var cors = require("cors");
app.use(cors());

var AylienNewsApi = require("aylien-news-api");

var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env.API_ID;

var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY;

var textapi = new AylienNewsApi.DefaultApi();

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// API request sent to Aylien API
app.post("/article", function (request, response) {
  axios
    .get("https://api.aylien.com/news/stories", {
      params: {
        story_url: request.body.text,
      },
      headers: {
        "Content-Type": "application/json",
        "X-AYLIEN-NewsAPI-Application-ID": process.env.API_ID,
        "X-AYLIEN-NewsAPI-Application-Key": process.env.API_KEY,
      },
    })
    .then(function (res) {
      console.log("success, " + JSON.stringify(res.data));
      response.send(JSON.stringify(res.data));
    })
    .catch(function (error) {
      console.error(error);
    });
});
