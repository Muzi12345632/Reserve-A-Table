$(document).ready(function() {
    $("#my-button").click(function() {
      //var searchTerm = $("#search-input").val();

      // Get all of the input fields
      var inputFields = $("#search-input, #search-input1, #location-dropdown");

      // Get the value of each input field
      var inputValues = inputFields.map(function() {
        return $(this).val();
      }).get();

      // Combine the input values into a single string
      var combinedInputValue = inputValues.join(",");

      // Do something with the combined input value
      console.log(combinedInputValue);

      //console.log(searchTerm);

      $.ajax({
          url: "http://localhost:8080/api/v1/restaurants/"+combinedInputValue,
          dataType: "json",
          data: {
            q: combinedInputValue
          },
          success: function(data) {
            var results = $("#results");
            results.empty();

            for (var i = 0; i < data.length; i++) {

              var tile = $("<div>").addClass("tile");
              //var star = $(".rating").addClass("tile-title");
              // Create the SVG element
              // Create a button element
              var button = $("<button>").attr("id","button1").text("Read More");


              var tileTitle = $("<h3>").addClass("tile-title").text(data[i].name);
              var tileTitle2 = $("<a>").addClass("tile-address").text( data[i].address.building);
              var tileTitle1 = $("<span>").attr("id", "newdot").text(data[i].address.street);
              var tileTitle3 = $("<p>").addClass("tile-cuisine").text(data[i].cuisine);
              var tileTitle4 = $("<span>").attr("id", "tile-borough").text(data[i].borough);
              var tileTitle5 = $("<p>").attr("id", "tile-grades").text(data[i].grades[0]);

              var newD = JSON.parse(data[i].grades[0]);
              console.log(newD)
              var grade = newD.score
              console.log(grade)
              tileTitle2.prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\"><path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/></svg>");
              tileTitle4.prepend("<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-buildings-fill' viewBox='0 0 16 16'><path d='M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z'/></svg>");
              tileTitle3.prepend("<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-egg-fried' viewBox='0 0 16 16'><path d='M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/><path d='M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z'/></svg>");
              //tileTitle5.prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\"><path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/></svg>");
              tileTitle5.prepend("<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-egg-fried' viewBox='0 0 16 16'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/></svg>")
              //tileTitle2.css("margin-left: 10px; display:flex; flex-direction:row;")





              var tileTitle6 = $("<p>").addClass("tile-title2").text(grade);
              tileTitle6.prepend("<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-egg-fried' viewBox='0 0 16 16'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/></svg>");
              tileTitle6.append(button)
              tileTitle2.append( tileTitle1);
              tileTitle3.append(tileTitle4);
              //tile.append(button);
              /*tileTitle.append(rating);*/

              tile.append(tileTitle, tileTitle2, tileTitle3, tileTitle4, tileTitle6 );


              results.append(tile);
            }
          }
      });
    });
});