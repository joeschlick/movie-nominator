let movies = []

const runSearch = $("#movie-search");
runSearch.click(function (e) {
  e.preventDefault();
    const movieInput = $("#movie-input").val().trim();
    console.log("click");
    console.log(movieInput);
    displayMovieInfo(movieInput);
    $("#movies-view").empty();
    $("#movie-input").empty();
    
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
        const movieDiv = $("<div id='movie'class='card mb-3' style='max-width: 450px'>");

        const rowDiv = $("<div class='row g-0'>");
        movieDiv.append(rowDiv)

        const imgColDiv = $("<div class='col-md-4 pr-0'>");
        rowDiv.append(imgColDiv)
        
        const poster = movieInfo.Poster;
        if (poster == "N/A") {
          return
        } else {const movieImg = $("<img id='poster'>").attr("src", poster)
        imgColDiv.append(movieImg);
        }

        const textColDiv = $("<div class='col-md-8 pl-0'>");
        rowDiv.append(textColDiv)
        
        const cardBodyDiv = $("<div class='card-body pl-0 pr-3'>");
        textColDiv.append(cardBodyDiv)

        const title = movieInfo.Title
        const movieTitle = $("<h5 >").text(title);
        cardBodyDiv.append(movieTitle)

        const year = movieInfo.Year
        const movieYear = $("<h6 class='mb-3'>").text("Year:  " + year);
        cardBodyDiv.append(movieYear)

        const nomButton = $("<button id='nomBtn' class='btn btn-secondary'>").text("Nominate")
        cardBodyDiv.append(nomButton)

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