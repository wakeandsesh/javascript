const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    checkFilms: function() {
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
    },
    checkUserLevel: function() {
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
    },
    writeYourGenres: function() {
        for(let i = 1; i < 4; i++) {
            const question = prompt(`Ваш любимый жанр под номером ${i}?`)
            if (question === '' || question == null) {
                console.log('Ты ввёл полную хуйню, включи мозги и попробуй снова');
                i--;
            }
            else {
                personalMovieDB.genres[i - 1] = question;
            }
        } 

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item}`)
        })
    },
    showMyDB: function() {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
        else {
            console.log('У вас нет доступа! Сосите писю')
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false
        }
        else {
            personalMovieDB.private = true
        }
    } 
};
