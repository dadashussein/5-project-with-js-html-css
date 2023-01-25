const API_KEY = "ce655d037589854f735cd93d575fc2e9";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce655d037589854f735cd93d575fc2e9";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=ce655d037589854f735cd93d575fc2e9";

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

getMovies();
async function getMovies(API_URL) {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
  showMovies(data.results);
}

function showMovies(movies) {
  //clear main
  main.innerHTML = "";
  movies.forEach((movie) => {
    if (movie.poster_path == null) {
    } else {
      const { title, poster_path, vote_average, overview } = movie;
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
            
            <img
              src="${IMG_PATH + poster_path}"
              alt=""
            />
        
            <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getColour(vote_average)}">${vote_average}</span>
            </div>
                <div class="overview">
                    <p>${overview}</p>
                </div>
        `;
      main.appendChild(movieEl);
    }
  });
}

function getColour(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCH_URL + "&query=" + searchTerm);

    search.value = "";
  }
});
