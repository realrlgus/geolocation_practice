if ("geolocation" in navigator) {
  var latitude;
  var longitude;
  var geoSuccess = function(position) {
    geoPosition = position;
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    // 위도 경도

    console.log(latitude, longitude);
  };
  var geoError = function(error) {
    //   MIS 로그인 불가하도록 처리
    //   error 변수 에러코드
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
    console.log(error);
  };
  // 사용자의 현재 위치를 구한다.
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
} else {
  console.log("It doesn't work..");
}
