    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });

    // Initialize carousel
    document.addEventListener("DOMContentLoaded", function () {
      const myCarousel = document.querySelector("#shellCarousel");
      if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
          interval: 5000,
          wrap: true,
        });
      }
    });
