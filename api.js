class movieCreator{
  constructor(title, rating, release, genre, director){
      this.title = title;
      this.rating = rating;
      this.release = release;
      this.genre = genre;
      this.director = director;
      
  }
}

async function findMovie(input) {
  try {
    const result = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=5c0cf985`);
    const data = await result.json();
    console.log(data);
    displayMovieInfo(data);
    
    

  } catch (err) {
    console.log(err);
  }
}
function getMovie() {
  const movieName = document.getElementById("movie-name").value;
  findMovie(movieName);

}
document.getElementById('movie-form').addEventListener('submit', function(e) {
    getMovie();
    e.preventDefault();
})

function displayMovieInfo (info){
  const title= info.Title;
  const rating= info.Year;
  const release= info.Rated;
  const genre= info.Genre;
  const director= info.Director;
  const movie = new movieCreator(title, rating, release, genre, director);
  document.getElementById("movie-title").innerText = movie.title;
  document.getElementById("movie-rating").innerText = movie.rating;
  document.getElementById("movie-release").innerText = movie.release;
  document.getElementById("movie-genre").innerText = movie.genre;
  document.getElementById("movie-director").innerText = movie.director;
}

function getMovie() {
  if(document.getElementById("movie-name").value == "") {
    alert("HEY PUT SOMETHING IN THE BOX");
  }
  else {
const movieName = document.getElementById("movie-name").value;
findMovie(movieName);
  }
}

document.getElementById('movie-form').addEventListener('submit', function(e) {
getMovie();
  e.preventDefault();

})