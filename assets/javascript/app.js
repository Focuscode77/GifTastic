
// Create global variables array.
var buttons = [''];
var API_KEY = 'nJ2X8ojY6X2AArANhiB28h1x5f335IIR&limit=25&rating=G';
var endpoint = 'http://api.giphy.com/v1/gifs/search?api_key=nJ2X8ojY6X2AArANhiB28h1x5f335IIR&limit=25&rating=G';

// Make ajax calls for buttons
// create a on-click event for user
// Debug along the way
// Renders every button within the array or added
function renderButtons() {
    $('.recent-search').empty();


    for (var i = 0; i < buttons.length; i++) {

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

// On click event to get new buttons from user

$("#submit-button").on('click', function (event) {
    event.preventDefault();


    var value = $('#search').val();
    // Checking


    buttons.push(value);

    renderButtons();
})



function searchGiphy(event) {
    event.preventDefault();

    var value = $('#search').val();
    fetchGiphy(value);
}


// Looping over giphys
function createGiphyTemplate(giphy) {
    var images = giphy.images;
    var template = `
    <div class="giphy">
<i class="far fa-star favorite" data-id="${giphy.id}" data-star="false">
</i>
<div class="giphy-image">
  <img src="${images.original_still.url}"
   data-still="${images.original_still.url}" 
   data-animate="${images.original.url}" 
   data-state="still">
  <i class="fa fa-play img-play"></i>
</div>
<div class="giphy-info">
  <p>Rating: g</p>
</div>

<div class="giphy-footer" data-link="${giphy.embed_url}"> 
</div>
</div>
    
`;

    return template;

};


function fetchGiphy(value) {
    var url = endpoint + '&q=' + value;

    $.ajax({
        url: url,
        method: "GET"

    }).then(function (response) {
        var giphys = response.data;
        renderGiphys(giphys);
        console.log(giphys);

        console.log("Value", value)

    });

};

function renderGiphys(giphys) {
    $('.giphy-content').empty();

    for (let i = 0; i < giphys.length; i++) {

        var giphy = giphys[i];
        var images = giphy.images;
        var giphyTemp = createGiphyTemplate(giphy);

        $('.giphy-content').append(giphyTemp);
    };

}



function imgCardClick(){

    var giphyCard = $(this);

    var img= giphyCard.find('img');
    var icon= giphyCard.find('img');
    
    var still = img.attr('data-still');
    var animate = img.attr('data-animate');
    var state = img.attr('data-state');

    if(state ==='still'){
    img.attr({
     
        src: animate,

        'data-state': 'animate'


    });


    } else {

        img.attr({

         src: still,

         'data-state': 'still'




        });



    }


}
// Events
$("#submit-button").on('click', searchGiphy);

$(document).on('click', '.giphy-image', imgCardClick);

































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