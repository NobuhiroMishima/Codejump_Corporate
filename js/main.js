const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const cover = document.querySelector('.cover');

hamburger.addEventListener('click', () => navigation.classList.toggle('visible'));
hamburger.addEventListener('click', () => cover.classList.toggle('cover-bg'));
cover.addEventListener('click', () => navigation.classList.toggle('visible'));
cover.addEventListener('click', () => cover.classList.toggle('cover-bg'));