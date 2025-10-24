const searchButton = document.getElementById("searchButton");
const resultsDiv = document.getElementById("resultsDiv");
const searchInput = document.getElementById("searchInput");
const form = document.getElementById("formId");

//
//
//
//
//
//

form.addEventListener("submit", (event) => event.preventDefault());
searchButton.addEventListener("click", function () {
  let query = searchInput.value;
  let http = new XMLHttpRequest();

  http.open(
    "GET",
    `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`
  );
  http.responseType = "json";
  http.setRequestHeader("accept", "application/json");
  http.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTM2MTQ0YTNmYTQ5ZjI1OGNiZWQyNzFlMGE4NmEwNiIsIm5iZiI6MTc2MTMwNDQzOS4yMDk5OTk4LCJzdWIiOiI2OGZiNWY3NzAxMjhiM2MyNDhjYzc5ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KZK8FNxR6HUGMmnVrjkGcPk1PtzAh4BSIUO_I0gVXYw"
  );

  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(http.response);
      resultsDiv.innerHTML = "";
      if (http.response.total_results > 0) {
        console.log("Results found:", http.response.total_results);
        let tvShows = http.response.results;

        tvShows.forEach((show) => {
          let id = show.id;
          let tvShowDiv = document.createElement("div");
          let img = document.createElement("img");
          let title = document.createElement("h2");
          let extraInfoDiv = document.createElement("div");
          let everythingDiv = document.createElement("div");

          title.innerHTML = show.name;

          img.setAttribute(
            "src",
            "https://media.themoviedb.org/t/p/w94_and_h141_bestv2" +
              show.poster_path
          );
          img.setAttribute("alt", `Poster of ${show.name}`);
          img.setAttribute("class", "thumbnailImg");
          tvShowDiv.setAttribute("class", "tvShowDiv");
          extraInfoDiv.setAttribute("class", "extraInfoDiv");
          everythingDiv.setAttribute("class", "everythingDiv");
          tvShowDiv.appendChild(img);
          tvShowDiv.appendChild(title);

          everythingDiv.appendChild(tvShowDiv);
          everythingDiv.appendChild(extraInfoDiv);

          resultsDiv.appendChild(everythingDiv);
          everythingDiv.addEventListener("click", function () {
            howLong(id, everythingDiv, extraInfoDiv);
          });
        });
      } else {
        console.log("No results found");
        resultsDiv.innerHTML = "<p>No results found</p>";
      }
    }
  };

  http.send();
});

function howLong(id, everythingDiv, extraInfoDiv) {
  everythingDiv.style.cursor = "wait";
  let sum = 0;
  let http1 = new XMLHttpRequest();

  http1.open("GET", `https://api.themoviedb.org/3/tv/${id}?language=en-US`);
  http1.responseType = "json";
  http1.setRequestHeader("accept", "application/json");
  http1.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTM2MTQ0YTNmYTQ5ZjI1OGNiZWQyNzFlMGE4NmEwNiIsIm5iZiI6MTc2MTMwNDQzOS4yMDk5OTk4LCJzdWIiOiI2OGZiNWY3NzAxMjhiM2MyNDhjYzc5ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KZK8FNxR6HUGMmnVrjkGcPk1PtzAh4BSIUO_I0gVXYw"
  );
  http1.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Number of seasons:", http1.response.number_of_seasons);

      extraInfoDiv.innerHTML = `<p>Number of seasons: ${http1.response.number_of_seasons}</p><p>Number of episodes: ${http1.response.number_of_episodes}</p>`;

      //
      for (let i = 1; i <= http1.response.number_of_seasons; i++) {
        let http2 = new XMLHttpRequest();

        http2.open(
          "GET",
          `https://api.themoviedb.org/3/tv/${id}/season/${i}?language=en-US`
        );
        http2.responseType = "json";
        http2.setRequestHeader("accept", "application/json");
        http2.setRequestHeader(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTM2MTQ0YTNmYTQ5ZjI1OGNiZWQyNzFlMGE4NmEwNiIsIm5iZiI6MTc2MTMwNDQzOS4yMDk5OTk4LCJzdWIiOiI2OGZiNWY3NzAxMjhiM2MyNDhjYzc5ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KZK8FNxR6HUGMmnVrjkGcPk1PtzAh4BSIUO_I0gVXYw"
        );
        http2.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            console.log("Number of episodes:", http2.response.episodes.length);
            http2.response.episodes.forEach((episode) => {
              sum += episode.runtime;
            });
            if (i === http1.response.number_of_seasons) {
              if (sum == 0) {
                window.alert("Total watch time information is not available.");
              } else {
                window.alert(
                  `Total watch time: ${Math.floor(sum / 60)} hours ${
                    sum % 60
                  } minutes`
                );
              }
              everythingDiv.style.cursor = "pointer";
            }
          }
        };

        http2.send();
      }
    }
    //
  };

  http1.send();
  everythingDiv.style.cursor = "pointer";
}
