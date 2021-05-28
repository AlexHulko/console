'use strict';
if (4 == 4) {
    console.log('ok');
} else {
    console.log('error');
}

const num = 50;

if (num<49) {
    console.log('error');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('ok');
}


//(num === 50) ? console.log('ok') : console.log('error');


const numa = 50;
switch (numa) {
    case 49:
        console.log('error');
        break;
    case 100: 
        console.log('error');
        break;
    case 50:
        console.log('OK'); 
        break;  
    default:
        console.log('almost');  
        break;

}

let uno = 50;

//while (uno <= 55) {
    //console.log(uno);
    //uno++;
//}

//do {
    //console.log(uno);
    //uno++;
//} 
//while (uno < 55);


//for (let i = 1; i < 10; i++) {
   // if (i === 6) {
 //       break;
        //continue;
    //}


   // console.log(i);
    
//}


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error');
            i--;
        }
        
        if (personalMovieDB.count < 10) {
            console.log ('error');

        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('norm');
        } else if (personalMovieDB.count >= 30) {
            console.log('nice');
        } else {
            console.log('ffffffffff');
        }
          
}

console.log(personalMovieDB);