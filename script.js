const btnEl = document.querySelector('.main-link');
const openButton = document.querySelector('.menu-open');
const windowClose = document.querySelector('.window-close')

openButton.addEventListener('click', function () {
    btnEl.classList.add('hidden');
    console.log(`kauga is here`)
});

windowClose.addEventListener('click', function () {
    btnEl.classList.remove('hidden');
    console.log(`hellow world`)
})