
const runSearch = $("#movie-search");
runSearch.click(function (e) {
  e.preventDefault();
  const movieInput = $("#movie-input").val().trim();
  console.log("click");
  console.log(movieInput);
  displayMovieInfo(movieInput);
  $("#movies-view").empty();
  $("#movie-input").empty();
});

function displayMovieInfo(movie) {
  const queryURL = `https://www.omdbapi.com/?s=${movie}&apikey=20928117`;

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (let i = 0; i < 10; i++) {
      let movieInfo = response.Search[i];
      //console.log(movieInfo)
      const movieDiv = $(
        "<div id='movie'class='card mb-3' style='max-width: 375px'>"
      );

      const rowDiv = $("<div class='row g-0'>");
      movieDiv.append(rowDiv);

      const imgColDiv = $("<div class='col-3 pr-0'>");
      rowDiv.append(imgColDiv);

      const poster = movieInfo.Poster;
      if (poster == "N/A") {
        return;
      } else {
        const movieImg = $("<img id='poster'>").attr("src", poster);
        imgColDiv.append(movieImg);
      }

      const textColDiv = $("<div class='col-9 pl-1'>");
      rowDiv.append(textColDiv);

      const cardBodyDiv = $("<div class='card-body pl-0 pt-2 pb-0 pr-3'>");
      textColDiv.append(cardBodyDiv);

      const title = movieInfo.Title;
      const movieTitle = $("<h5 >").text(title);
      cardBodyDiv.append(movieTitle);

      const year = movieInfo.Year;
      const movieYear = $("<h6 class='mb-3'>").text(year);
      cardBodyDiv.append(movieYear);

      const nomButton = $(
        "<button id='nomBtn' class='btn btn-secondary btn-sm'>"
      ).text("Nominate");
      cardBodyDiv.append(nomButton);

      $("#movies-view").append(movieDiv);
    }
  });
}

const nominate = $("#nomBtn");
nominate.click(function () {
  let nomMovies = [];
  
})
