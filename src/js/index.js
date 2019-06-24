$(document).ready(function() {
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
  });
});
// FOR LOCAL JSON FILE
/* const xmr = new XMLHttpRequest();
xmr.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    var features = JSON.parse(this.responseText);
    console.log(features);
    features.forEach(value => {
      let featuresData = document.getElementById("features");
      let template =
        "<div>" +
        '<div class="features__img">' +
        "<img " +
        'src="' +
        value.img +
        '" ' +
        'alt=""' +
        "/>" +
        "</div>" +
        '<h4 class="features__title">' +
        value.title +
        "</h4>" +
        '<p class="features__description">' +
        value.description +
        "</p>" +
        "</div>";
      featuresData.innerHTML += template;
      // console.log(featuresData);
    });
  }
};
// GET JSON DATA FROM NET - GITHUB SITE
// xmr.open(
//   "GET",
//   "....",
//   true
// );
//  LOCAL VERSION
xmr.open("GET", "/section-2.json");
xmr.send(); */
// **************************************

let findOutMore = document.getElementById("find-out");

findOutMore.addEventListener("click", function() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(this.responseText);
      let featuresData = document.getElementById("features");
      // let featuresImg = featuresData.querySelectorAll("img");
      // let featuresTitle = document.querySelectorAll(".features__title");
      let featuresImg = Array.prototype.slice.call(
        featuresData.querySelectorAll("img"),
        0
      );
      let featuresTitle = Array.prototype.slice.call(
        featuresData.querySelectorAll(".features__title"),
        0
      );

      let count = 0;
      for (elem of jsonData) {
        count++;
        if (count === elem.id) {
          featuresImg[count - 1].src = elem.thumbnailUrl;
          featuresTitle[count - 1].innerHTML = elem.title;
        }
        if (count === 6) {
          break;
        }
      }
    } else {
      console.error("Ошибка получения данных: " + xhr.error);
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.send();
});
/* ************************************************* */
