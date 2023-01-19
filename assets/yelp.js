var foodBtn = document.querySelector("#foodBtn");
var selectedArr = [];

function fetchRestaurant(){
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer VxrpWfJqWDXlR2UCc_nybZGtSgwqpgzl6KThOagOjzq-Fc7bvxyA79XBRUX9tbDPDvCDGUxDpGDtu7j_vtoI3D-9RfUJMMkfcfi4_VFK3IIS_z1Fzlc_4of6M4LBY3Yx'
}
};
// Request temporary access: http://cors-anywhere.herokuapp.com/corsdemo 
// due to cors problem
fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=philadelphia&term=restaurant&radius=2000&categories=healthy&sort_by=best_match&limit=10', options)
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
for (var i = 0; i <=2; i++){
  var randomArr = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  selectedArr.push(randomArr);
}
displayRestaurant(selectedArr);
}

function displayRestaurant(selectedArr){
var displayArea = document.querySelector("#container-box");
// restaurantOneEl.innerHTML = "";

for (var i = 0; i <= 2; i++){
  // var restaurantOneEl = document.querySelector("#container-box");
  var restaurantOneEl = document.createElement('div');
  restaurantOneEl.classList.add("restaurantCard");
  var nameOne = document.createElement("h3");
  nameOne.textContent = selectedArr[i].name;
  restaurantOneEl.appendChild(nameOne);
  var rateEl = document.createElement("h4");
  rateEl.textContent = "Rating: " + selectedArr[i].rating;
  restaurantOneEl.appendChild(rateEl);
  var addressEl = document.createElement("p");
  addressEl.textContent = "Address: " + selectedArr[i].location.address1;
  restaurantOneEl.appendChild(addressEl);
  displayArea.appendChild(restaurantOneEl);
}
}

foodBtn.addEventListener('click', fetchRestaurant);