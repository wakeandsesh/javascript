let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

start();  

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function checkFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов ?', ''),
        b = prompt('На сколько оцените его ?(По 10ти бальной шкале)', '')
    
        if (a != '' && a!= null && b != '' && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            i--;
        }
    }
}

checkFilms();

function checkUserLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов')
    }
    else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель')
    }
    else if (personalMovieDB.count >= 30) {
        alert('Вы - киноман')
    }
    else {
        alert('Произошла ошибка')
    }
}

checkUserLevel();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        const question = prompt(`Ваш любимый жанр под номером ${i}?`)
        personalMovieDB.genres[i - 1] = question;
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
    else {
        console.log('У вас нет доступа! Сосите писю')
    }
}

showMyDB();

