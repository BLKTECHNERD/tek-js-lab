////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  

  ////////////////////////////////
  // Get Even
  ////////////////////////////////
  
  for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }
  

  // Fizz Buzz
  ////////////////////////////////
  
  for (let i = 1; i <= 100; i++) {
    let output = '';
  
    if (i % 3 === 0) {
      output += 'Fizz';
    }
  
    if (i % 5 === 0) {
      output += 'Buzz';
    }
  
    console.log(output || i);
  }
  

    ////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins".
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy");

console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
  const yelledName = turtle.toUpperCase();
  console.log(yelledName);
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log the index of Titanic.
console.log(favMovies.indexOf('Titanic'));

// Use the .sort method.
favMovies.sort();

// Use the method pop.
favMovies.pop();

// Push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy");

// Reverse the array.
favMovies.reverse();

// Use the shift method.
favMovies.shift();

// Unshift
favMovies.unshift("Avatar");
// The unshift method returns the new length of the array.

// Splice "Django Unchained" and add "Avatar" 
const index = favMovies.indexOf("Django Unchained");
favMovies.splice(index, 1, "Avatar");


// Slice the last half of the array.
const middleIndex = Math.floor(favMovies.length / 2);
const secondHalf = favMovies.slice(middleIndex);

// Store the value of slice in a variable and console.log it.
console.log(secondHalf);

// Console.log final results.
console.log(favMovies);

// After running the above tasks, console.log the index of "Fast and Furious".
console.log(favMovies.indexOf("Fast and Furious"));


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
  ];
  
  // Remove Eggbert (hint look at the slice/splice methods).
  whereIsWaldo.splice(1, 1);
  
  // Change "Neff" to "No One".
  whereIsWaldo[2][2] = "No One";
  
  // Access and console.log "Waldo".
  console.log(whereIsWaldo[3][1][1]);
  

  ////////////////////////////////
// Excited Kittens
////////////////////////////////

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
    if (i % 2 === 0) {
      const randomMessage = Math.floor(Math.random() * 3);
      switch (randomMessage) {
        case 0:
          console.log("...human... why you taking pictures of me...?");
          break;
        case 1:
          console.log("...the catnip made me do it...");
          break;
        case 2:
          console.log("...why does the red dot always get away...?");
          break;
        default:
          break;
      }
    }
  }
  

  ////////////////////////////////
  // Find the Median
  ////////////////////////////////
  
  const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
  nums.sort((a, b) => a - b);
  const medianIndex = Math.floor(nums.length / 2);
  const median = nums[medianIndex];
  console.log(median);
  
  