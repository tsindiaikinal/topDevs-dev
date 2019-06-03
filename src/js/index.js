const xmr = new XMLHttpRequest();
xmr.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        var features = JSON.parse(this.responseText);
        console.log(features[0]);
        for(key in features) {
            let titles = document.querySelectorAll('.features__img img');
            titles[0].setAttribute("src", features[0].img);
            console.log(titles[0].getAttribute("src"));
            // titles.innerHTML = features[0].img;
            console.log(titles);
        }
    }
};
xmr.open("GET", "/section-2.json", true);
xmr.send();