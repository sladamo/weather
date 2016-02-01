jQuery(document).ready(function() { handleSearchBox() } );

function updateScreen(data) {
  window.movie = data.responseJSON;

  // Do not change code above this line or you will be sad
  // YOUR CODE GOES HERE

  $(".movie-title").html(movie.Title);
  $("img").attr("src", movie.Poster);

  // Do not change code below this line or you will be sad
}

function getMovieData(title) {
  url = "https://omdbapi.com/?t=" + title + "&plot=full&r=json"
  $.ajax({url: url, type: "GET", complete: updateScreen});
}

function handleSearchBox() {
  $("form").submit(function(e) {
    e.preventDefault();
    search_term = $("input").val()
    getMovieData(search_term)
  })
}
