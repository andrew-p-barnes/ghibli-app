class FilmManager {
    constructor() {
        this.avails = []
        this.watchList = []
        this.filmsWatched = []
        this.currentId = 0;
    }
    createFilm(title, description, releaseDate, rtScore) {
        this.currentId++;
        return {
            id: this.currentId,
            title: title,
            description: description.substring(0, 300),
            releaseDate: releaseDate,
            rtScore: rtScore
        }
    }
    renderFilms(filmsList) {
        let container = document.querySelector('.container');
        let filmHtmlStr = '';
        filmsList.forEach(film => {
            var imgSrc;
            if (film.rtScore >= 60) {
                imgSrc = 'fresh.svg';
            }
            else {
                imgSrc = 'rotten.svg';
            }
            let filmHtml = createFilmHtml(film.id, film.title, film.description, film.releaseDate, film.rtScore, imgSrc)    
            filmHtmlStr += filmHtml
        });
        container.innerHTML = filmHtmlStr;
    } 
}