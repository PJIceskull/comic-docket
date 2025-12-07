export const meta = {
  order: 8,
  id: "mylibrary",
  label: "My Library",
};

export function render() {
  console.log(meta.id);

  $.get(`pages/${meta.id}.html`, function (data) {
    console.log("Page data: " + data);
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
