const navList = document.querySelector('.nav-list');
document.querySelector('#sidebars').onclick = () => {
    navList.classList.toggle('active');
};

const sidebars = document.querySelector('#sidebars');
document.addEventListener('click', function (e) {
    if (!sidebars.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('active');
    }
});

