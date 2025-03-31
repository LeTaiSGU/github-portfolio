document.addEventListener("DOMContentLoaded", function () {
  // Hàm cuộn mượt với thời gian và easing
  function smoothScroll(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed / duration) * distance + start;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  // Lấy các phần tử nút từ thanh nav
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const skillLink = document.querySelector(".navbar a:nth-child(3)"); // Nút Skill
  const projectLink = document.querySelector(".navbar a:nth-child(4)");
  const contactLink = document.querySelector(".navbar a:nth-child(5)");

  // Lấy các section hoặc phần tử mục tiêu
  const aboutSection = document.getElementById("about");
  const skillsTitle = document.querySelector(".skill-h1"); // Lấy <h1 class="skill-h1">
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");

  // Xử lý click cho Home
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll(0, 1000);
  });

  // Xử lý click cho About
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
    smoothScroll(targetPosition, 1000);
  });

  // Xử lý click cho Skills (trỏ tới <h1 class="skill-h1">)
  skillLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetPosition = skillsTitle.getBoundingClientRect().top + window.pageYOffset;
    smoothScroll(targetPosition, 1000);
  });

  // Xử lý click cho Projects
  projectLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
    smoothScroll(targetPosition, 1000);
  });

  // Xử lý click cho Contact
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (contactSection) {
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      smoothScroll(targetPosition, 1000);
    } else {
      console.log("Contact section not found!");
    }
  });
});