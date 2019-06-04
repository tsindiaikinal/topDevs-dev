$(document).ready(function() {
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
  });
});

const xmr = new XMLHttpRequest();
xmr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var features = JSON.parse(this.responseText);
    console.log(features);
    features.forEach(value => {
      let featuresData = document.getElementById("features");
      let output =
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
      featuresData.innerHTML += output;
      // console.log(featuresData);
    });
  }
};
xmr.open("GET", "/section-2.json", true);
xmr.send();
