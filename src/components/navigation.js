import * as e from './elements';

const menuItems = () => {
  e.homeLink.textContent = 'home';
  e.homeLink.setAttribute('id', 'home');
  e.menuLink.textContent = 'menu';
  e.menuLink.className += 'px-5 px-lg-4 px-xl-5';
  e.menuLink.setAttribute('id', 'menu');
  e.contactLink.textContent = 'contact';
  e.contactLink.setAttribute('id', 'contact');
};

const logo = () => {
  e.logowrap.className = 'd-flex justify-content-center mt-sm-5';
  e.hlogo.textContent = 'BurgerBest';
  e.hlogo.className = 'hlogo mt-5 mt-lg-4 d-none d-lg-block';
}

const nav = () => {
  e.nav.className += 'nav d-flex align-items-center fw-bold text-capitalize my-5 mb-lg-0 mt-lg-4';
  menuItems();
};

const header = () => {
  e.header.className += 'd-flex flex-column-reverse flex-lg-row align-items-center justify-content-between px-md-5';
  logo();
  nav();
};

export default header;