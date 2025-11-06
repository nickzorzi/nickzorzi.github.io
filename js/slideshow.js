function startSlideshow(containerId, interval = 2000) {
  let slideIndex = 0;
  const container = document.getElementById(containerId);
  const slides = container.getElementsByClassName("mySlides");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % slides.length;

    setTimeout(showSlides, interval);
  }

  showSlides();
}

startSlideshow("slideshow1");
startSlideshow("slideshow2");
startSlideshow("slideshow3", 3000);
startSlideshow("slideshow4");
startSlideshow("slideshow5");
startSlideshow("slideshow6", 4000);