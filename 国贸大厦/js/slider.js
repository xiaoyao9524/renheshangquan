(function () {
    var sliderWrapper = document.getElementsByClassName("slider-wrapper")[0];
    var prevBtn = sliderWrapper.getElementsByClassName("slider-prev")[0];
    var nextBtn = sliderWrapper.getElementsByClassName("slider-next")[0];
    var content = sliderWrapper.getElementsByClassName("slider-content")[0];
    let currentIndex = 0;
    // let width = 1200;
    let sliderLen = content.getElementsByTagName('div').length;
    prevBtn.addEventListener('click', sliderPren)
    nextBtn.addEventListener('click', sliderNext)

    function sliderPren() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = (sliderLen -1);
        }
        content.style.left = -currentIndex * 100 + '%';

    }
    function sliderNext() {
        currentIndex++;
        if (currentIndex > (sliderLen -1)) {
            currentIndex = 0;
        }
        content.style.left = -currentIndex * 100 + '%';
    }
})()