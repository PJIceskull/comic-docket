import { login } from "../main";

export const meta = {
  order: 2,
  id: "login",
  label: "Log In",
};

export function render() {
  console.log(meta.id);

  $.get(`pages/${meta.id}.html`, function (data) {
    // console.log("Page data: " + data);
    $("#app").html(data);
    init();
  });
}

export function init() {
  console.log("Login Function Clicked.");

  $("#loginForm").on("submit", function (e) {
    // console.log(e.target);
    console.log("Log in button clicked");
    e.preventDefault();

    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();

    // console.log("User Login:", email);
    // console.log("User Password:", password);

    login(email, password);
  });
}
