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
  });
}

export function init() {
  console.log("Home Function Clicked.");

  // $("#app").on("click", "#clickMe", function () {
  //   alert("You clicked the button!");
  // });
}
