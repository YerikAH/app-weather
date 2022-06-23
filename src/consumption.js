function consumption() {
  //var principal
  const $imgWeather = document.getElementById("imgWeather");
  const $infoDetailsTodayGrado = document.getElementById(
    "infoDetailsTodayGrado"
  );
  const $infoDetailsTodaySimb = document.getElementById("infoDetailsTodaySimb");
  const $NameImgWeather = document.getElementById("NameImgWeather");
  const $placeNameFullFooter = document.getElementById("placeNameFullFooter");
  //end var principal
  //var search
  const $searchInput = document.getElementById("searchInput");
  const $searchInputSubmit = document.getElementById("searchInputSubmit");

  //var search - button
  const $btnLondon = document.getElementById("btnLondon");
  const $btnBarcelona = document.getElementById("btnBarcelona");
  const $btnLongBeach = document.getElementById("btnLongBeach");
  //end var search -button
  //end var search
  //var all
  const $windStatusNum = document.getElementById("windStatusNum");
  const $humidityStatuNum = document.getElementById("humidityStatuNum");
  const $visibilityStatusNum = document.getElementById("visibilityStatusNum");
  const $airStatusNum = document.getElementById("airStatusNum");
  //end var all
  let formValue;
  //animation
  let $progressYellow = document.querySelector(".progress-yellow");
  //Error
  const $errorApi = document.getElementById("errorApi");
  //change grade
  const $changeGrade = document.getElementById("changeGrade");
  const $uno = document.querySelector(".uno");
  //!KEY
  const key = "666db86ea2ba4b2ea0c152137222306";
  //Logic code
  $btnLondon.addEventListener("click", (e) => {
    formValue = "London";
    request();
  });
  $btnBarcelona.addEventListener("click", (e) => {
    formValue = "Barcelona";
    request();
  });
  $btnLongBeach.addEventListener("click", (e) => {
    formValue = "btnLongBeach";
    request();
  });
  $searchInputSubmit.addEventListener("click", (e) => {
    formValue = $searchInput.value;
    request();
  });
  function onOrOffError() {
    $errorApi.style.display = "none";
  }
  $changeGrade.addEventListener("click", (e) => {
    // console.log($uno.className);
    if ($uno.className == "uno") {
      $infoDetailsTodaySimb.textContent = "°F";
      let farenheit = Math.round(
        (9 / 5) * $infoDetailsTodayGrado.textContent + 32
      );
      $infoDetailsTodayGrado.innerHTML = farenheit;
      $changeGrade.innerHTML = "°C";
      $uno.classList.remove("uno");
      $uno.classList.add("dos");
    } else {
      $infoDetailsTodaySimb.textContent = "°C";
      let celcius = Math.round(($infoDetailsTodayGrado.textContent - 32) / 1.8);
      $infoDetailsTodayGrado.innerHTML = celcius;
      $changeGrade.innerHTML = "°F";
      $uno.classList.remove("dos");
      $uno.classList.add("uno");
    }
  });
  async function request() {
    try {
      let res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${formValue}&aqi=no`
      );
      let json = await res.json();
      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText,
          message: json.error.message,
        };
      const infoNameCountry = json.location.country;
      const infoNameGrados = json.current.temp_c;
      const infoNameGradosF = json.current.temp_f;
      const infoNameImageText = json.current.condition.text;
      const infoNameImageShow = json.current.condition.code;
      const infoNameWindy = json.current.wind_mph;
      const infoNameHumedity = json.current.humidity;
      const infoNameVisibility = json.current.vis_miles;
      const infoNameAir = json.current.pressure_mb;
      $placeNameFullFooter.innerHTML = `${infoNameCountry}`;
      $infoDetailsTodayGrado.innerHTML = `${infoNameGrados}`;
      $NameImgWeather.innerHTML = `${infoNameImageText}`;
      $windStatusNum.innerHTML = `${infoNameWindy}`;
      $humidityStatuNum.innerHTML = `${infoNameHumedity}`;
      $visibilityStatusNum.innerHTML = `${infoNameVisibility}`;
      $airStatusNum.innerHTML = `${infoNameAir}`;
      $progressYellow.style.setProperty("width", `${infoNameHumedity}%`);
      if (infoNameImageShow == 1000) {
        $imgWeather.setAttribute("src", "../images/Clear.png");
      } else if (infoNameImageShow >= 1003 && infoNameImageShow <= 1030) {
        $imgWeather.setAttribute("src", "../images/LightCloud.png");
      } else if (infoNameImageShow >= 1063 && infoNameImageShow <= 1072) {
        $imgWeather.setAttribute("src", "../images/Shower.png");
      } else if (infoNameImageShow == 1087) {
        $imgWeather.setAttribute("src", "../images/Thunderstorm.png");
      } else if (infoNameImageShow >= 1114 && infoNameImageShow <= 1147) {
        $imgWeather.setAttribute("src", "../images/HeavyCloud.png");
      } else if (infoNameImageShow >= 1150 && infoNameImageShow <= 1183) {
        $imgWeather.setAttribute("src", "../images/LightRain.png");
      } else if (infoNameImageShow >= 1186 && infoNameImageShow <= 1201) {
        $imgWeather.setAttribute("src", "../images/HeavyRain.png");
      } else if (infoNameImageShow >= 1204 && infoNameImageShow <= 1213) {
        $imgWeather.setAttribute("src", "../images/Hail.png");
      } else if (infoNameImageShow >= 1216 && infoNameImageShow <= 1225) {
        $imgWeather.setAttribute("src", "../images/Snow.png");
      } else if (infoNameImageShow >= 1237 && infoNameImageShow <= 1264) {
        $imgWeather.setAttribute("src", "../images/Sleet.png");
      } else {
        $imgWeather.setAttribute("src", "../images/Thunderstorm.png");
      }
    } catch (err) {
      $errorApi.innerHTML = `${err.message}`;
      $errorApi.style.display = "block";
      setTimeout(() => onOrOffError(), 3000);
    }
  }
}
export default consumption;
