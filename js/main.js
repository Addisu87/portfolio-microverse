const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
function displayMobileMenu() {
  menuItem.style.display = 'block';
}

function closeMobileMenu() {
  menuItem.style.display = 'none';
}

document
  .querySelector('.openMenu')
  .addEventListener('click', displayMobileMenu);
closeMobileItems.forEach((element) =>
  element.addEventListener('click', closeMobileMenu)
);
