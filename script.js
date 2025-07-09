let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const currentLink = document.querySelector(
        "header nav a[href*=" + id + "]"
      );
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  });
};

const typeData = new Typed(".role", {
  strings: ["Software Developer", "Web Developer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1000,
});

document.getElementById("contactForm").addEventListener("submit", function () {
  document.getElementById("formStatus").textContent =
    "✅ Message sent! Thanks for reaching out.";
  document.getElementById("formStatus").style.color = "green";
});
