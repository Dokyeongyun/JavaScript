$(function() {
    // 브라우저 창의 스크롤을 처리하는 함수 $(window).scroll()
    // 브라우저 창은 스크롤될 때 마다 scroll 이벤트를 발생시키므로
    // scroll() 함수를 이용하여 이벤트 핸들러를 걸어 줌
    $(window).scroll(function() {
        // 현재 브라우저 창의 상하 스크롤 값을 리턴하는 함수 $(window).scrollTop()
        var top = $(window).scrollTop();

        if(top > 0){
            $('#header').addClass('inverted');
        } else {
            $('#header').removeClass('inverted');
        }
    });

    $(window).trigger('scroll');

    var dpFrom = $('#from').datepicker({
        // 표현하고자 하는 날짜의 형식을 문자열로!
        dateFormat: 'yy-mm-dd',
        // 0은 오늘을 의미함, 오늘 이전의 날짜를 비활성화
        minDate: 0,
        // 특정 날짜를 선택했을 때 호출되는 함수 onSelect()
        onSelect: function() {
            dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate'));
        }
    });

    // 초기값을 현재 날짜로 setDate()
    dpFrom.datepicker('setDate', new Date());

    var dpTo = $('#to').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });

    dpTo.datepicker('setDate', 4);

    // $()로 셀렉트된 엘리머트에 submit 이벤트가 발생했을 때, 인자로 넘긴 이벤트 핸들러 e를 실행
    $('#form-search').submit(function(e) {

        // 브라우저는 submit 이벤트가 발생하면 form 의 action 속성에 정의된 URL 로 form 의 내용을 전송한다.
        // 하지만 페이지 이동 없이 폼의 내용을 전송해야 하므로 preventDefault() 를 호출하여 기본동작이 실행되지 않도록!
        e.preventDefault();

        // val() 함수를 이용해 입력창의 값을 가져옴
        var from = $('#from').datepicker().val();
        var to = $('#to').datepicker().val();

        search(from, to);
    });
});

function search(from, to) {
    var url = 'http://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url, {
        from: from,
        to: to
    }, function(r) {
        console.log(r);
        var $list = $('#list-panel');

        for(var i=0; i<r.length; i++){
            var data = r[i];
            var $item = createListItem(data);

            $list.append($item);
        }

        $('#list-bg').show();
    });
}


function createListItem(data) {
    var $tmpl = $('#list-item-template').clone().removeAttr('id');

    $tmpl.find('.list-item-image').attr('src', data.titleImageUrl);
    $tmpl.find('.list-item-name').html(data.name);
    $tmpl.find('.list-item-city-name').html(data.cityName);

    $tmpl.click(function(e) {
        var url = 'detail.html?id=' + data.id;
        window.location = url;
    });

    return $tmpl;
}