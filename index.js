// // navbar
// let mobileMenu = document.querySelector(".mobile-menu");  
// let navLinks = document.querySelector(".nav-links");
// let icon = document.querySelector(".mobile-menu i");
// let links = document.querySelectorAll(".nav-links a");
// mobileMenu.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//   // نغير شكل الأيقونة
//     icon.classList.toggle("fa-bars");
//     icon.classList.toggle("fa-xmark");
// });
// // يقفل المنيو لما أضغط على لينك
// links.forEach(link => {
//     link.addEventListener("click", function () {
//         navLinks.classList.remove("active");
//     // يرجع الأيقونة Bars
//         icon.classList.add("fa-bars");
//         icon.classList.remove("fa-xmark");
//     });
// });

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

// وظيفة الفتح والقفل وتبديل الأيقونة
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // تبديل الأيقونة بين الـ Bars والـ X
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// قفل المنيو أوتوماتيكياً لما تدوسي على أي لينك
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    });
});