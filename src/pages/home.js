import {
  comicvine_apiKey,
  comicvineURL,
  JSON_URLformat,
  apiResultsLimitURL,
  resultsLimit,
} from "../apiKeys";
// import { enableCORS } from "../main";

// let pageID = "home";
let hashTag = window.location.hash;
let pageID = hashTag.replace("#", "");

export const meta = {
  order: 1,
  id: "home",
  label: "Home",
};

export function render() {
  // console.log(meta.id);

  $.get(`pages/${meta.id}.html`, function (data) {
    // For example, insert the HTML into a div with id="home-content"
    // console.log("Page data: " + data);
    $("#app").html(data);
    init();
  });
}

export function init() {
  // API response calls
  let resultsLimit = 10;
  let cvResource = ""; // Comicvine resource
  let comicvineVolURL = `${comicvineURL}/volumes/?api_key=${comicvine_apiKey}${apiResultsLimitURL}${resultsLimit}${JSON_URLformat}`;

  // console.log("Home Function Clicked.");

  console.log("Volumes:", comicvineVolURL);

  // enableCORS(comicvineVolURL);

  // let proxyURL = `https://cors-anywhere.herokuapp.com/${comicvineVolURL}`;
  // $.getJSON(proxyURL, function (data) {
  //   console.log("Data: ", data);
  // }).fail((error) => {
  //   console.log("Error: ", error);
  // });

  $.ajax({
    url: comicvineVolURL,
    // dataType: "jsonp",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    success: function (data) {
      console.log("Data: ", data);
    },
    error: function (error) {
      console.log("Error: ", error);
    },
  });

  // $.getJSON(comicvineVolURL, function (data) {
  //   console.log("Data: ", data);
  // }).fail((error) => {
  //   console.log("Error: ", error);
  // });

  // $("#app").on("click", "#clickMe", function () {
  //   alert("You clicked the button!");
  // });
}
