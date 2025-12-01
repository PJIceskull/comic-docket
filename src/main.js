import "./style.css";
// Firebase
import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const pageModules = import.meta.glob("./pages/*.js", { eager: true });

// Variables to store routes
const routes = {};

for (const [path, pageModule] of Object.entries(pageModules)) {
  const fileName = path.split("/").pop();
  const defaultId = fileName.replace(".js", "");

  const meta = pageModule.meta || { id: defaultId, label: defaultId };
  const id = meta.id || defaultId;

  routes[id] = {
    order: pageModule.meta.order,
    render: pageModule.render,
    init: pageModule.init || null,
    meta,
  };
}

console.log(routes);

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "") || "home"; // If Hashtag is empty or "", it will default to "home"
  console.log(hashTag + " " + pageID);

  // Scroll to Top of the Page
  scroll(0, 0);

  const route = routes[pageID] || routes.home;

  // console.log(route.render());
  $("#app").html(route.render());

  if (typeof route.init === "function") {
    route.init();
  }
}

/////////////////////////////////////////////////////
// User Account Registration and Login Functions //
////////////////////////////////////////////////////
// Check if User is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If User is logged in
    console.log("User is Logged in.", user);
    $("#guestLinks").hide(); // Hide Login and Signup links in Navbar
    $("#userAccountLinks").show(); // Show User Profile and Create Button in Navbar
  } else {
    // If User is logged out
    console.log("User is not logged in.");
    $("#guestLinks").show(); // Login and Signup links in Navbar
    $("#userAccountLinks").hide(); // User Profile and Create Button in Navbar
  }
});

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {
  $(".userProfile").on("click", function (e) {
    e.preventDefault;
    // console.log(e);
    // $(".dropDownMenu").toggle(function () {});
    $(".dropDownMenu").toggleClass("showMenu");
  });
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
