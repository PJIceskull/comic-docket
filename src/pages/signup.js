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
  });
}

export function init() {
  console.log("Sign up Function Clicked.");

  $("#app").on("click", "#clickMe", function () {
    alert("You clicked the button!");
  });
}
