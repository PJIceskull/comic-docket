export const meta = {
  order: 5,
  id: "profile",
  label: "profile",
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
  //   console.log("Home Function Clicked.");
}
