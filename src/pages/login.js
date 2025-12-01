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
  });
}

export function init() {
  console.log("Login Function Clicked.");

  $("#app").on("click", "#clickMe", function () {
    alert("You clicked the button!");
  });
}
