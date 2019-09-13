
// Create global variables array.
// Make ajax calls for buttons
// create a on-click event for user
// Debug along the way


// created on click event
$("button").on("click", function () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +

        person + "&api_key=nJ2X8ojY6X2AArANhiB28h1x5f335IIR&limit=25&rating=G";

    $.ajax({
        url: queryURL,
        method: "GET"



    }).then(function (response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }

    });




});