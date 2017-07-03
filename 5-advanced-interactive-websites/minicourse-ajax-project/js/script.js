
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // API keys should be stored in a JSON object named config defined in
    // js/config.js
    var nytimesKey = config.NYTIMES_API_KEY;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = '//maps.googleapis.com/maps/api/streetview?size=600x400&location=' +
        address;
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // load New York Times articles
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
        city + '&api-key=' + nytimesKey;

    $.getJSON(nytimesUrl, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + city);

        data.response.docs.forEach(function(doc) {
            var article = '<li class="article"><h4>' +
                '<a href="' + doc.web_url + '">' +
                doc.headline.main + '</a></h4>' +
                '<p>' + doc.snippet + '</p></li>';
            $('#nytimes-articles').append(article);
        });
    })
    .error(function() {
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    return false;
};

$('#form-container').submit(loadData);
