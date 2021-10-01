var loaderTime;

function loader() {
  loaderTime = setTimeout(showPage, 2000); // aumentei o tempo para ilustração
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-content").style.display = "block";
}
