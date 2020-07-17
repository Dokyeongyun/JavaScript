var map;

$(function() {
    var myTrips = Cookies.getJSON('MYTRIPS');

    if(!myTrips)
        myTrips = [];

    showMap();

    generateMyTripList(myTrips)
});

function showMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 33.3614,
            lng: 126.5292
        }
    });
}

function generateMyTripList(list) {
    var $list = $('#mytrip-list');

    for (var i=0; i<list.length; i++) {
        var myTrip = list[i];

        var $item = $('#mytrip-item-template').clone().removeAttr('id');
        $item.find('.item-name').html(myTrip.name);
        $item.find('.item-city-name').html(myTrip.cityName);
        $list.append($item);
    }
}