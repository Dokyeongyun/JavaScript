var map;

$(function() {
    var id = parseId(window.location.search);

    getDetail(id);

    showMap();
});

function getDetail(id) {
    var url = 'http://javascript-basic.appspot.com/locationDetail';

    $.getJSON(url, {
        id: id
    }, function(r) {
        $('.detail-header-name').html(r.name);
        $('.detail-header-city-name').html(r.cityName);
        $('.detail-desc-text').html(r.desc);

        var $gallery = $('#detail-images');
        var images = r.subImageList;

        for(var i=0; i<images.length; i++){
            var $image = $('<img src="' + images[i] + '"/>');
            $gallery.append($image);
        }

        Galleria.loadTheme('libs/galleria-1.6.1/dist//themes/classic/galleria.classic.min.js');
        Galleria.run('#detail-images');

        showMarker(r.position.x, r.position.y);
    });
}

function showMap() {
    // 구글맵 API 의 지도가 google.maps.Map() 이란 함수로 정의되어 있고
    // 이를 사용하기 위해 new 연산자를 이용하여 인스턴스를 생성
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 33.3617,
            lng: 126.5292
        }
    });
}

function showMarker(lat, lng) {
    var pos = {
        lat: lat,
        lng: lng
    };

    new google.maps.Marker({
        position: pos,
        map: map
    });

    map.panTo(pos);
}

function parseId(str) {
    var s = str.substring(1);
    var args = s.split('&');

    for(var i=0; i<args.length; i++){
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id')
            return tokens[1];
    }

    return null;
}