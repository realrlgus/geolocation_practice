// 구글 지도를 그린다
function initialize(latitude, longitude) {
  var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
}

if ("geolocation" in navigator) {
  var latitude;
  var longitude;
  var geoSuccess = function(position) {
    geoPosition = position;

    // 위도 경도
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    initialize(latitude, longitude);
  };
  var geoError = function(error) {
    //   MIS 로그인 불가하도록 처리
    //   error 변수 에러코드
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };
  // 사용자의 현재 위치를 구한다.
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
} else {
  console.log("It doesn't work..");
}
