document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const aboutlink = document.getElementById("about-link");
  const aboutSection = document.getElementById("about");

  aboutlink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Cập nhật tiến trình của progress bar với hiệu ứng động
  document.querySelectorAll(".progress-line").forEach((el) => {
    let span = el.querySelector("span");
    let width = el.getAttribute("data-width");

    // Thêm độ trễ để hiệu ứng hoạt động khi trang tải xong
    setTimeout(() => {
      span.style.width = width;
    }, 300); // 300ms delay để animation nhìn mượt hơn
  });
});
