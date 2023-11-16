const getHeaderHeight = () => {
    if (document.querySelector('.header')) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
    }
};

getHeaderHeight();

window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        getHeaderHeight();
    }
});
