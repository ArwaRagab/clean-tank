
    // ===== MOBILE MENU =====
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (menuIcon.classList.contains('fa-bars')) {
                menuIcon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // ===== SIDEBAR NAV (للصفحات اللي فيها sidebar) =====
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    if (navItems.length > 0) {
        // ✅ IntersectionObserver بدل scroll + getBoundingClientRect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navItems.forEach(link => {
                        link.classList.remove('text-blue-600', 'font-bold');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('text-blue-600', 'font-bold');
                            link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                    });
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(section => observer.observe(section));

        // Click على الـ nav items
        navItems.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (!targetSection) return;
                window.scrollTo({
                    top: targetSection.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            });
        });
    }

