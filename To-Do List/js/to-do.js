var task = document.getElementById("task");

let rgb2hex = (c) =>
  "#" + c.match(/\d+/g).map((x) => (+x).toString(16).padStart(2, 0)).join``;

task.addEventListener("click", function () {
  var completedColor = "#51df70";
  var todoColor = "#76cfe0";
  var taskColorRgb = getComputedStyle(task).backgroundColor;
  var taskColor = rgb2hex(taskColorRgb);
  if (taskColor === completedColor) {
    task.style.backgroundColor = todoColor;
  } else if (taskColor === todoColor) {
    task.style.backgroundColor = completedColor;
  } else {
    console.log("Unexpected task color!");
  }
});

remove.addEventListener("click", function () {
  var remove = document.getElementById("remove");
  remove.parentNode.parentNode.parentNode.removeChild(
    remove.parentNode.parentNode
  );
});
