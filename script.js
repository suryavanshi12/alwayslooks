let ul = document.querySelector('ul');

document.querySelector('#menu-btn').onclick = () => {
  ul.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function () {
  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const feedbackText = this.previousElementSibling;
      const fullFeedback = this.nextElementSibling;
      if (feedbackText.style.display === "none") {
        feedbackText.style.display = "inline";
        fullFeedback.style.display = "none";
        this.textContent = "Read More";
      } else {
        feedbackText.style.display = "none";
        fullFeedback.style.display = "inline";
        this.textContent = "Read Less";
      }
    });
  });
});