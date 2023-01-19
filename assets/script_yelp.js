var foodBtn = document.querySelector("#foodBtn");
var selectedArr = [];

function fetchRestaurant(){
var city = document.querySelector("#foodBtn").value;
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer VxrpWfJqWDXlR2UCc_nybZGtSgwqpgzl6KThOagOjzq-Fc7bvxyA79XBRUX9tbDPDvCDGUxDpGDtu7j_vtoI3D-9RfUJMMkfcfi4_VFK3IIS_z1Fzlc_4of6M4LBY3Yx'
}
};
// Request temporary access: http://cors-anywhere.herokuapp.com/corsdemo 
// due to cors problem
fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city + "&term=healthy%20food&sort_by=best_match&limit=10", options)
.then(function(result){
  return result.json();
})
.then(function(data){
  console.log(data);
  randomRestaurantChoice(data)
})

.catch(function(err) {
  console.error("Error: ", err);
})
}

function randomRestaurantChoice(data){
var choiceArr = data.businesses;
for (var i = 0; i <=1; i++){
  var randomArr = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  selectedArr.push(randomArr);
}
displayRestaurant(selectedArr);
}

function displayRestaurant(selectedArr){
var displayArea = document.querySelector("#container");
displayArea.innerHTML = "";

for (var i = 0; i <= 1; i++){
  var restaurantOneEl = document.querySelector("#container");
  restaurantOneEl.classList.add("restaurantCard");
  var nameOne = document.createElement("h2");
  nameOne.textContent = selectedArr[i].name;
  restaurantOneEl.appendChild(nameOne);
  var rateEl = document.createElement("h4");
  rateEl.textContent = "Rating: " + selectedArr[i].rating;
  restaurantOneEl.appendChild(rateEl);
  var addressEl = document.createElement("p");
  addressEl.textContent = "address: " + selectedArr[i].location.address1 + ", " + selectedArr[i].location.city;
  restaurantOneEl.appendChild(addressEl);
}
}

foodBtn.addEventListener('click', fetchRestaurant)
