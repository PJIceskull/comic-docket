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

// Function to for changing the page
// Use to be called in other functions
function changePage(pageID) {
  let hashTag = window.location.hash;
  let webURL = window.location.href;
  // Scroll to Top of the Page
  scroll(0, 0);

  const route = routes[pageID];

  webURL.replace(hashTag, route);

  $("#app").html(route.render());
}

// export function enableCORS(api_URL) {
//   $.ajax({
//     url: api_URL,
//     dataType: "jsonp",
//     success: function (data) {
//       console.log("Data: ", data);
//     },
//     error: function (error) {
//       console.log("Error: ", error);
//     },
//   });
// }

/////////////////////////////////////////////////////
// User Account Registration and Login Functions //
////////////////////////////////////////////////////
// All Login features should be Async function

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

// Sign Up
export async function signUp(email, password, displayName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    // See what user is
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.log("Error signing up:", error);
  }
  changePage("home");
}

// Log in
export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // See what user is
      console.log("User logged up:", user);

      // setTimeout(function () {
      //   changePage("home");
      // }, 1000);
      changePage("home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("Error logging in:", error);
    });
}

// Sign Out // Loggin Out
export async function logout() {
  try {
    await signOut(auth);
    console.log("User Signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
  changePage("home");
}

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

  // Click on logout Button
  $("#userAccountLinks .profileGroup .logoutLink").on("click", function (e) {
    logout();
    // setTimeout(function () {}, 1000);
  });
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
