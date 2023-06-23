const RESTAURANT_URL = "https://raw.githubusercontent.com/naveenrawat51/online-food-ordering-app-with-vanilla-Javascript/master/api/hotels.json"

// // const hotels = await data.json();
// fetch(RESTAURANT_URL).then(function (response) {
// 	// The API call was successful!
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (data) {
// 	// This is the JSON from our response
// 	console.log(data);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });

const a =10;
const card = document.getElementById('card');

fetch(RESTAURANT_URL).then(function(response){
    if(response.ok){
        return response.json()
    }
    else{
        return Promise.reject(response);
    }
}).then(function(data){
    console.log(data);
    // data.map((d)=>card(d));
    data.map((d, i)=>cardCreation(d, i));

}).catch(function(err){
    console.warn("Something went wrong",err);
})

const cardCreation = (hotel, index) =>{
    // document.getElementById("hotel_name").innerText = hotel.name;
    // document.getElementById("hotel_img").src = hotel.img;
    // document.getElementById("hotel_location").innerText = hotel.location;
    // document.getElementById("hotel_rating").innerText = `Rating: ${hotel.rating} `;
    const card_container = document.createElement('div');

    const hotel_name = document.createElement('h4');
    hotel_name.innerText = hotel.name;

    const hotel_image = document.createElement('img');
    hotel_image.src = hotel.img;

    const hotel_location = document.createElement('h3');
    hotel_location.innerText = hotel.location;

    const hotel_rating = document.createElement('h3');
    hotel_rating.innerText =hotel.rating;

    card_container.appendChild(hotel_name);
    card_container.appendChild(hotel_image);
    card_container.appendChild(hotel_location);
    card_container.appendChild(hotel_rating);
    card.appendChild(card_container);
    card.classList.add('card')
}

function myFunction() {
    // Declare variables
    var input, filter, a,allHotels, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
   
    allHotels = document.getElementById('card').getElementsByTagName('div')
   
   

  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < allHotels.length; i++) {
        a = allHotels[i].getElementsByTagName('h4');
        txtValue = a[0].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            allHotels[i].style.display = "";
        } else {
            allHotels[i].style.display = "none";
      }
    }
  }

  function filterRating(){
    var list, i, switching, b, shouldSwitch;
     var allHotels = document.getElementById('card').getElementsByTagName('div')
     switching = true;
     while (switching) {
        // start by saying: no switching is done:
        switching = false;
        // Loop through all list-items:
        for (i = 0; i < (allHotels.length - 1); i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
          switch place with the current item: */
          
          if (Number(allHotels[i].getElementsByTagName('h3')[1].innerHTML) <  Number(allHotels[i+1].getElementsByTagName('h3')[1].innerHTML)) {
            /* if next item is numerically
            lower than current item, mark as a switch
            and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark the switch as done: */
          allHotels[i].parentNode.insertBefore(allHotels[i + 1], allHotels[i]);
          switching = true;
        }
      }
  }
