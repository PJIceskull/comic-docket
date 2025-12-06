import { signUp } from "../main";

export const meta = {
  order: 3,
  id: "signup",
  label: "Sign Up",
};

export function render() {
  console.log(meta.id);

  $.get(`pages/${meta.id}.html`, function (data) {
    // console.log("Page data: " + data);
    $("#app").html(data);
    init(); // Call Init Listeners function for this page
  });
}

export function init() {
  console.log("Sign up Function Clicked.");

  // Check if Confirm Password matches with entered "password"
  $("#confirmPassword").keyup(function (e) {
    let password = $("#loginPassword").val();
    let confirmPassword = $("#confirmPassword").val();
    if ($("#confirmPassword").val() != "") {
      checkPassword(password, confirmPassword);
    }
  });

  $("#signupForm").on("submit", function (e) {
    // console.log("Sign in button clicked");
    // console.log(e.target);
    e.preventDefault();

    let email = $("#loginEmail").val();
    let userName = $("#userName").val();
    let password = $("#loginPassword").val();
    let confirmPassword = $("#confirmPassword").val();

    let userRegisInfo = {
      userEmail: email,
      userName: userName,
      userPassword: password,
    };

    console.log("User regisation info:", userRegisInfo);

    checkPassword(userRegisInfo.userPassword, confirmPassword);

    signUp(
      userRegisInfo.userEmail,
      userRegisInfo.userPassword,
      userRegisInfo.userName
    );

    // setTimeout(function () {
    //   $.get(`pages/dashboard.html`, function (data) {
    //     // console.log("Page data: " + data);
    //     $("#app").html(data);
    //   });
    // }, 1000);
  });
}

function checkPassword(userPassword, confirmPassword) {
  if (confirmPassword != userPassword) {
    $(".message").html("Passwords does not match.").css("color", "#f80000");
  } else {
    $(".message").html("Passwords match").css("color", "#34c300");
  }
}
