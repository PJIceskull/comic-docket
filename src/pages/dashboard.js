export const meta = {
  order: 4,
  id: "dashboard",
  label: "Dashboard",
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
  console.log("Home Function Clicked.");

  $("#app").on("click", "#clickMe", function () {
    alert("You clicked the button!");
  });
}
