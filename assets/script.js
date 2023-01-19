var btn = document.querySelector(".button");
var savedworkouts = [];
var workouts = JSON.parse(localStorage.getItem("savedworkouts"));

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
function fetchExercises() {
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
      console.log(data);
      displayExercise(data);
    })

    .catch(function (jqXHR) {
      console.error("Error: ", jqXHR);
    });
}

function chooseMuscle() {
  console.log(data.list[0].muscle);
}

function displayExercise(data) {
  var exerciseGroup = [];
  // empty the element
  var exerciseGroup = [];
  var exerciseInput = document.querySelector("#container-input");
  // exerciseInput.innerHTML = "";

  for (var i = 0; i <= 3; i++) {
    // var exerciseOneEl = document.querySelector('#exercise-'+i);
    var exerciseOneEl = document.createElement("div");
    exerciseOneEl.classList.add("exerciseCard");
    var titleOne = document.createElement("h3");
    titleOne.textContent = data[i].name;
    exerciseOneEl.appendChild(titleOne);
    var type = document.createElement("h4");
    type.textContent = "Type: " + data[i].type;
    exerciseOneEl.appendChild(type);
    var instructions = document.createElement("p");
    instructions.textContent = "Instrctions: " + data[i].instructions;
    exerciseOneEl.appendChild(instructions);
    exerciseInput.appendChild(exerciseOneEl);
    exerciseGroup.push(data[i].name);
  }
  localStorage.setItem("dailyexercises", JSON.stringify(exerciseGroup));
}

btn.addEventListener("click", fetchExercises);
