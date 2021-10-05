// // var sports = [];
// // var sports = ["football", "tennis", "rugby"];
// // var numberOfElements = sports.length;

// // console.log("number of elements ", numberOfElements);

// // var first_sport = sports[0];
// // console.log("first sport is", first_sport);

// // sports.push("curling");
// // sports.push("snooker");
// // sports.push("darts");
// // console.log("sports", sports)

// // var removesport = sports.pop()
// // console.log("sports", sports)
// // console.log("remove sport", removesport)

// // sports.unshift("basketball");
// // console.log("sports", sports)

// // sports.shift();
// // console.log("sports", sports)

// // var removedSport = sports.splice(3, 1)
// // console.log("removed sports", sports)

// // for (var currentsport of sports){
// //     var uppercasedsoport = currentsport.toUpperCase();
// //     console.log(uppercasedsoport);
// // }

// // for (var i = 0; i < sports.length; i ++){
// //     var currentsport = sports[i]
// //     var uppercasedsoport = currentsport.toUpperCase()
// //     console.log(uppercasedsoport);
// // }

// var movie = {}
// console.log("movie" , movie);

// var movie = {
// title: "It\'s a wonderful life", 
// year: 1946, 
// language: "Spanish"
// }

// console.log(movie);

// var title = movie.title;
// console.log("title", title);

// movie.cast = ["James Stewart", "Donna Reed"]
// console.log(movie);

// movie.language = "English";

// movie["language"] = "French";
// console.log(movie);

// movie["subtitle-language"] = "german";
// var propertyToAccess = "subtitle-language";
// movie[propertyToAccess] = "german"

// delete movie.year;
// console.log(movie);

// movie.ratings = {
//     critic: 94,
//     audience: 95
// };
// console.log(movie);

// for (var key in movie){
//     var value = movie[key];
//     console.log(`The ${key} is ${value}`);
// }

// var keys = Object.keys(movie);
// console.log("keys", keys);

var movies = [
    {
      title: 'It\'s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      cast: [
        'James Stewart',
        'Donna Reed'
      ],
      ratings: {
        critic: 94,
        audience: 95
      }
    },
    {
      title: 'Black Panther',
      year: 2018,
      director: 'Ryan Coogler',
      cast: [
        'Chadwick Boseman',
        'Michael B. Jordan'
      ],
      ratings: {
        critic: 97,
        audience: 77
      }
    },
    {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      director: 'Rian Johnson',
      cast: [
        'Mark Hamill',
        'Carrie Fisher'
      ],
      ratings: {
        critic: 91,
        audience: 48
      }
    },
    {
      title: 'Citizen Kane',
      year: 1941,
      director: 'Orson Welles',
      cast: [
        'Joseph Cotten',
        'Dorothy Comingore'
      ],
      ratings: {
        critic: 100,
        audience: 90
      }
    },
  ];
  
  // 1. Loop through the array of movies and make each movie's title all capital letters.

  for (var currentsmovie of movies){
    var uppercasedmovie = currentsmovie.title.toUpperCase();
    movies.title = uppercasedmovie
}
    console.log(movies);
  
  // 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
  for (var movie of movies){
    if(movie.title === "CITIZEN KANE"){
        console.log(movie.year);}
}

  // 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

  for (var i = 0; i < movies.length; i++){
      var movie = movies[i]
      var rating = movie.ratings.audience;
      console.log(`${movie.title} has an audience rating of ${rating}`);
  }