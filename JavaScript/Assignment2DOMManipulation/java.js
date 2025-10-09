document
  .getElementsByClassName("btn")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my-form").style.background = "#ff0000ff";
    document.querySelector("body").classList.add("bg-dark");
    let body = document.getElementsByClassName("bg-dark")[0];
    body.style.background = "#3f3f3fff";
    body.style.color = "#ffffffff";
    document.getElementsByClassName("items")[0].lastElementChild.innerHTML =
      "<h1>Hello</h1>";
    this.style.background = "#00ff00ff";
  });
