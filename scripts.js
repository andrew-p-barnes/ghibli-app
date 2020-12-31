var filmManager = new FilmManager;

function createFilmHtml(id, title, description, releaseDate, rtScore, imgSrc) {
    let filmHtml =
        `
        <div class="card" data-id=${id}>
            <div class="card-body">
                <h1>${title}</h1>
                <p class="description">${description}</p>
                <div class="footer">
                    <p>Release date: ${releaseDate}</p>
                    <p>RT score: ${rtScore} <img src=${imgSrc} width='30'></p>
                </div>
            </div>
        </div>
        `
    return filmHtml;
}

const app = document.getElementById('root');
    
const logo = document.createElement('img');
logo.setAttribute('id','logo');
logo.src = 'logo.png';

const container = document.createElement('div');
container.classList.add('container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(function(data) {
        data.forEach(film => {
            let avail = filmManager.createFilm(film.title, film.description, film.release_date, film.rt_score);
            filmManager.avails.push(avail)
        });
        filmManager.renderFilms(filmManager.avails);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });