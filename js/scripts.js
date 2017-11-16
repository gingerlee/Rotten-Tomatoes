function Movie(date, title, score) {
  this.date = date;
  this.title = title;
  this.score = score;
}
var movies = [];

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var date = $("input#date").val();
    var title = $("input#title").val();
    var score = parseInt($("input#score").val());
    var newMovie = new Movie(date, title, score);

    $(".tbody").append("<tr>" + "<td>" + newMovie.date + "</td>" + "<td>" + newMovie.title + "</td>" + "<td>" + newMovie.score + "</td>" + "</tr>");

    movies.push(newMovie);
  });

  $("#score-sort").click(function() {
    $(".tbody").empty();
      movies.sort(function(a, b){
      return b.score - a.score;
      });

    movies.forEach(function(movie) {
    $(".tbody").append("<tr>" + "<td>" + movie.date + "</td>" + "<td>" + movie.title + "</td>" + "<td>" + movie.score + "</td>" + "</tr>");
    });
  });
});
