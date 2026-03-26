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

// 2. SIDEBAR — كل المتغيرات الأول ✅
// ============================================
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]'); // ✅ اتعرّفت الأول
let isScrollingFromClick = false;
// وظيفة تفعيل اللينك النشط
function setActiveLink(id) {
    navItems.forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
        link.classList.add('text-slate-600');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-600', 'font-bold', 'border-r-2', 'border-blue-600');
            link.classList.remove('text-slate-600');
            // ✅ السطر الجديد - بيعمل scroll للينك النشط عشان يبان في السايدبار
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}
// الـ scroll event
window.addEventListener('scroll', function () {
    if (isScrollingFromClick) return;
    let currentId = '';
    sections.forEach(section => {
        // ✅ بنستخدم getBoundingClientRect بدل offsetTop
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
            currentId = section.getAttribute('id');
        }
    });
    setActiveLink(currentId);
});
// الـ click event
navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        setActiveLink(targetId.replace('#', ''));
        isScrollingFromClick = true;
        // ✅ بنستخدم getBoundingClientRect بدل offsetTop
        const rect = targetSection.getBoundingClientRect();
        window.scrollTo({
            top: rect.top + window.scrollY - 80,
            behavior: 'smooth'
        });
        setTimeout(() => {
            isScrollingFromClick = false;
        }, 800);
    });
});
