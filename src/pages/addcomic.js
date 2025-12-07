export const meta = {
  order: 6,
  id: "addcomic",
  label: "Add Comic",
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
  //   console.log("Add comic Function Clicked.");
  //   $("#app").on("click", "#clickMe", function () {
  //     alert("You clicked the button!");
  //   });
}
