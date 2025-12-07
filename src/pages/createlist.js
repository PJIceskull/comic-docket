export const meta = {
  order: 7,
  id: "createlist",
  label: "Create List",
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
