var btn = document.querySelector('.button');


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
var muscle = selectedExercise[Math.floor(Math.random() * selectedExercise.length)];
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

function displayExercise(data){
  var exerciseOneEl = document.querySelector('#exercise-one');
  var titleOne = document.createElement('h3');
  titleOne.textContent = data[0].name;
  exerciseOneEl.appendChild(titleOne);
}


btn.addEventListener('click', displayExercise);

// api url
// const api_url =
// 	'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle';

// // Defining async function
// async function getapi(url) {
	
// 	// Storing response
// 	const response = await fetch(url);
	
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>muscle</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;
	
// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }

// // var newDiv = document.createElement('div')
// // var newContent = document.createTextNode("Hi there and greetings!");
// // newDiv.appendChild(newContent);

// // selectedExercise




// // 03-ACT,27- README
