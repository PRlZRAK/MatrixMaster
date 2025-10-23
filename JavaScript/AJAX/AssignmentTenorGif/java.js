const gifDiv = document.getElementById("gifDiv");
const btn = document.getElementById("btn");
const searchInput = document.getElementById("searchInput");

btn.addEventListener("click", function () {
  let search = searchInput.value;
  let http = new XMLHttpRequest();
  http.open(
    "GET",
    `https://api.tenor.com/v1/search?q=${search}&key=LIVDSRZULELA&limit=50`
  );
  http.responseType = "json";
  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let images = http.response.results;
      displayGifs(images);
    }
  };
  http.send();
});

function displayGifs(images) {
  gifDiv.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", images[i].media[0].gif.url);
    img.setAttribute("class", "gif");
    gifDiv.appendChild(img);
  }
}
