// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movies = [];
    moviesArray.forEach((movie) => {
      movies.push(movie.director);
    });
    return movies;
  }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//found online and works

function howManyMovies(movies) {
    
      const spielbergDramas = movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    };
  

  // I'M LOST !!!!

    //solution found
//Works but without function
//const howManyMovies = (array) => {
//    return array.filter((movie) => {
//      const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
//      const isDramaMovie = movie.genre.includes('Drama');
//      return isDirectedByStevenSpielberg && isDramaMovie;
//    }).length;
//  };


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function calculateAverageDramaRate(movies) {

  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//Found online

function turnHoursToMinutes(movies) {
    return movies.map(movie => {
      const duration = movie.duration.split(' ');
      let minutes = 0;
      for (let time of duration) {
        if (time.includes('h')) {
          minutes += parseInt(time) * 60;
        } else {
          minutes += parseInt(time);
        }
      }
      return {
        ...movie,
        duration: minutes
      };
    });
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
