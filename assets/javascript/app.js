
// Create global variables array.
var buttons = ['Cats', 'Food', 'Lions'];

// Make ajax calls for buttons
// create a on-click event for user
// Debug along the way
// Renders every button within the array or added
function renderButtons() {

    for(var i = 0; i < buttons.length; i++){

     var buttonName = buttons[i];

     var button = `
     
     <div class="wrap-buttons">
     
     <button class = "btn btn-search" data-name="${buttonName}">
     ${buttonName}</button>
     <button data-name="${buttonName}" class="btn btn-delete
     ></button>
     
     </div>
     
     
     `;

     $('.recent-search').append(button);

    }

};

renderButtons();



































// $(document).ready(function() {
// created on click event
// $("button").on("click", function () {
    // var person = $(this).attr("data-person");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +

        // person + "&api_key=nJ2X8ojY6X2AArANhiB28h1x5f335IIR&limit=25&rating=G";

    // $.ajax({
        // url: queryURL,
        // method: "GET"



    // }).then(function (response) {
        // var results = response.data;

        // for (var i = 0; i < results.length; i++) {
            // var gifDiv = $("<div>");

            // var rating = results[i].rating;

            // var p = $("<p>").text("Rating: " + rating);

            // var personImage = $("<img>");
            // personImage.attr("src", results[i].images.fixed_height.url);

            // gifDiv.prepend(p);
            // gifDiv.prepend(personImage);

            // $("#gifs-appear-here").prepend(gifDiv);
        // }

    // });




// });

// });