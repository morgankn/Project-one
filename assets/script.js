var selectedExercise = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];

function muscleGroups() {
  for (var i = 0; i < muscle.length; i++);
  console.log(muscleGroups);
}
var muscle =
  selectedExercise[Math.floor(Math.random() * selectedExercise.length)];
fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle, {
  method: "GET",
  headers: { "X-Api-Key": "GDPoj1GGfvpCVpqAi3UAYg==YnZXl7SnTbs8tAMJ" },
})
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    console.log(data[0], data[1], data[2], data[4]);
  })

  .catch(function (jqXHR) {
    console.error("Error: ", jqXHR);
  });

function chooseMuscle() {
  console.log(data.list[0].muscle);
}

// Array of upperbody, Lowerbody, and Smaller Muscles (For Loop)
// Array inside of an Array, Random inside and Array?
// Append to container-input

// 03-ACT,27- README
