// When using querySelector
    // # for an id
    // . for a class

// D - 1
const ramenAPI = 'http://localhost:3000/ramens'; // Defining from where we want to fetch
const ramenMenuDiv = document.getElementById('ramen-menu'); // Menu Div in index.html
// D - 2
const ramenDetailImage = document.querySelector(".detail-image"); 
const ramenDetailName = document.querySelector(".name");
const ramenDetailRestaurant = document.querySelector(".restaurant");
const ramenDetailRating = document.querySelector("#rating-display");
const ramenDetailComment = document.querySelector("#comment-display"); // Using # because we use Query Selector but we are pulling an "id" not a class. See first comment line on document
// D - 3
const ramenNewForm = document.querySelector("#new-ramen")
const ramenNewName = document.querySelector("#new-name")
const ramenNewRestaurant = document.querySelector("#new-restaurant")
const ramenNewImg = document.querySelector("#new-image")
const ramenNewRating = document.querySelector("#new-rating")
const ramenNewComment = document.querySelector("#new-comment")

// Deliverable 1

fetch(ramenAPI)
  .then(response => response.json()) 
  .then(renderRamens); //  

function renderRamens(ramens) { 
  ramens.forEach(renderRamenMenu);
}

function renderRamenMenu(ramen) {
  const ramenImageElement = document.createElement('img');
  ramenImageElement.src = ramen.image; 
  ramenMenuDiv.append(ramenImageElement); 

  // Deliverable 2

  // Click Event Listener
  ramenImageElement.addEventListener('click', () => { 
    displayRamenDetail(ramen)
  })
}
const displayRamenDetail = (ramen) => {
  ramenDetailImage.src = ramen.image
  ramenDetailName.textContent = ramen.name
  ramenDetailRestaurant.textContent = ramen.restaurant
  ramenDetailRating.textContent = ramen.rating
  ramenDetailComment.textContent = ramen.comment
} 
// Deliverable 3

// Submit Event Listener
ramenNewForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const newRamen = {
    "name": event.target["new-name"].value,
    "restaurant": event.target["new-restaurant"].value,
    "image": event.target["new-image"].value,
    "rating": event.target["new-rating"].value,
    "comment": event.target["new-comment"].value
  }

  renderRamenMenu(newRamen) // Send newRamen object to renderRamenMenu
})