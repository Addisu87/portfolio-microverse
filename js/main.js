const mobileMenu = document.querySelector('#mobile-menu-hide');
const btnMobileMenu = document.querySelector('#mobile-menu-button');
const btnCancelMobileMenu = document.querySelector('#btn-close-nav');
const PortfolioClicked = document.querySelector('.link-portfolio');
const AboutClicked = document.querySelector('.link-about');
const ContactClicked = document.querySelector('.link-contact');

const page = document.getElementsByTagName('body')[0];

function displaymobilemenu() {
  mobileMenu.classList.replace('mobile-menu-hide', 'mobile-menu-show');
  page.classList.add('noscroll');
}

function hidemobilemenu() {
  mobileMenu.classList.replace('mobile-menu-show', 'mobile-menu-hide');
  page.classList.remove('noscroll');
}

btnMobileMenu.addEventListener('click', displaymobilemenu);
btnCancelMobileMenu.addEventListener('click', hidemobilemenu);
PortfolioClicked.addEventListener('click', hidemobilemenu);
AboutClicked.addEventListener('click', hidemobilemenu);
ContactClicked.addEventListener('click', hidemobilemenu);
