const API_KEY = "api_key=5ee8f27402aa22b8b96429569b263e47"
const API_URL = "https://api.themoviedb.org/3/"
const MOVIE_URL = `${API_URL}movie/popular?${API_KEY}`
const value ="https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`

console.log(MOVIE_URL)


const getMovies = (url) =>{
    fetch(url)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch((error)=> console.log(error))
}

getMovies(MOVIE_URL)

const movieContainer = document.querySelector(".movieContainer");

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg


const showMovies = (movies)=>{
    movieContainer.innerHTML = "";
    movies.forEach(movie =>{
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML=`<img src="${value}${poster_path}" width="400px" height="300px" alt="">
            <div class="movieTitle">
            <p>${title}</p>
                <p>${vote_average}</p>
            </div>
            <h2>Overview</h2>
            <p>${overview}</p>
`;movieContainer.appendChild(divTag)
    })

    // https://api.themoviedb.org/3/search/movie
    const form = document.querySelector(".search")
    const search = document.querySelector("#searchInput")

    form.addEventListener("keyup", (e) => {
        e.preventDefault();
        const searchValue = search.value
        if(searchValue){
            getMovies(SEARCH_URL + "&query=" + searchValue)
        }else{
            getMovies(MOVIE_URL)
        }
    })


}