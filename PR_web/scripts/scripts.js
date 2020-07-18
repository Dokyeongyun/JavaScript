// 모든 DOM 엘리먼트가 준비되었을 때 발생하는 DOMContentLoaded 이벤트가 발생했을 때 실행되는 제이쿼리 편의함수 $()
$(function() {

    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if( top > 0 ){
            $('#header').addClass('inverted');
        } else{
            $('#header').removeClass('inverted');
        }
    });

    // 페이지를 새로고침했을 때 scroll() 함수를 불러옴으로써 로고 상태 초기화
    $(window).trigger('scroll');

});