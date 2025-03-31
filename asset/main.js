var typed = new Typed(".text", { 
    strings: ["Backend Developer", "Programmer", "Gamer"], 
    typeSpeed: 50,      // Gõ nhanh hơn (giảm số này để tăng tốc)
    backSpeed: 30,      // Xóa nhanh hơn
    startDelay: 300,    // Chờ 0.3s trước khi bắt đầu
    backDelay: 1000,    // Giữ chữ lâu hơn trước khi xóa
    loop: true,         // Lặp vô hạn
    showCursor: true,   // Hiển thị con trỏ nhấp nháy
    cursorChar: "|",    // Ký tự con trỏ
});

document.addEventListener("DOMContentLoaded",function(){
    const homeLink = document.getElementById("home-link");
    const aboutlink = document.getElementById("about-link");

    const aboutSection = document.getElementById("about");

    aboutlink.addEventListener("click",function (event){
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    })

    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    });
});

