function totalRestaurants(){
    $.ajax({
        url: "http://localhost:8080/api/v1/restaurants/total",
        type: "GET",
        success: function(data) {
          // Set the text of the span element with the ID `totalRestaurants` to the total number of restaurants.
          $("#totalRestaurants").text(data);
        }
    });
}

totalRestaurants();

//#dde6ed
//#071621

/*$(document).ready(function() {
  // Call the `totalRestaurants` function to fetch the total number of restaurants.
  totalRestaurants();
});*/
