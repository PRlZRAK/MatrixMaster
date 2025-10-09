document
  .getElementsByClassName("btn")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my-form").style.background = "#ff0000ff";
    document.getElementsByClassName("bg-dark")[0].style.color = "#ffffffff";
    document.getElementsByClassName("bg-dark").style.background = "#3f3f3fff";
  });
