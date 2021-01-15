let movies = []

const runSearch = $("#movie-search");
runSearch.click(function () {
    const movieInput = $("#movie-input").val().trim();
    console.log("click");
    console.log(movieInput);
    displayMovieInfo(movieInput);
    $("#movies-view").empty();
})


function displayMovieInfo(movie) {
  
    const queryURL = `https://www.omdbapi.com/?s=${movie}&apikey=20928117`;

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      for (let i = 0; i < 10; i++) {
        let movieInfo = response.Search[i];
        //console.log(movieInfo)
        const movieDiv = $("<div id='movie'class='card'style='width: 10rem'>");
        

        const poster = movieInfo.Poster;
        if (poster == "N/A") {
          return
        } else {const movieImg = $("<img class='card-img-top'>").attr("src", poster)
        movieDiv.append(movieImg);
        }
        
        

        const title = movieInfo.Title
        const pOne = $("<p>").text("Title: " + title);
        $("#movies-view").append(movieDiv);

        
      }

      // Creating a div to hold the movie
      var movieDiv = $("<div class='movie'>");
      var title = response.Search.Title;
      //console.log(Title)

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Title: " + title);

      // Displaying the rating
      movieDiv.append(pOne);

      // Storing the release year
      var released = response.Released;

      // Creating an element to hold the release year
      var pTwo = $("<p>").text("Released: " + released);

      // Displaying the release year
      movieDiv.append(pTwo);

      // Storing the plot
      var plot = response.Plot;

      // Creating an element to hold the plot
      var pThree = $("<p>").text("Plot: " + plot);

      // Appending the plot
      movieDiv.append(pThree);

      // Retrieving the URL for the image
      var imgURL = response.Poster;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      movieDiv.append(image);

      // Putting the entire movie above the previous movies
      //$("#movies-view").prepend(movieDiv);
    });

  }