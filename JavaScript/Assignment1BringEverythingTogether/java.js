function tierListSubmit() {
  const fill = document.getElementById("tierListFill").value;
  const row = document.getElementById(
    document.getElementById("gradeSelect").value
  ).parentElement;
  var cell = row.insertCell();
  console.log(fill, row);
  cell.innerHTML = `<h3>${fill}</h3>`;
}

var theFurthestText = document.getElementById("veryFarDiv");
var f = document.getElementById("veryFar");
var marginTop = 100;
function further() {
  marginTop += 100;
  f.style.marginTop = marginTop + "px";
}

f.addEventListener("mouseover", further);
