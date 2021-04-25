import './css/styles.css';
import backgroundImg from './components/background';
import header from './components/navigation';
import { logo, description } from './pages/home';
import menuList from './pages/menu';
import contactForm from './pages/contact';

import * as e from './components/elements';

e.docBody.className = 'container-fluid text-white vh-100';

e.homeLink.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.logowrap.className = 'logo-wrap d-flex justify-content-center mt-sm-5';
  e.hlogo.className = 'hlogo mt-5 mt-lg-4 d-none d-lg-block';
  e.header.classList = 'header d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between px-md-5';
  e.content.appendChild(e.mainOne);
});

e.menuLink.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.logowrap.className = 'd-flex justify-content-center mt-2 mt-lg-5';
  e.hlogo.className = 'hlogo mt-0 mt-lg-4';
  e.header.classList = 'd-flex flex-column-reverse flex-lg-row align-items-center justify-content-end justify-content-lg-between px-md-5';
  e.content.appendChild(e.mainTwo);
});

e.contactLink.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.logowrap.className = 'd-flex justify-content-center mt-2 mt-lg-5';
  e.hlogo.className = 'hlogo mt-0 mt-lg-4';
  e.header.classList = 'd-flex flex-column-reverse flex-lg-row align-items-center justify-content-end justify-content-lg-between px-md-5';
  e.content.appendChild(e.mainThree);
});

backgroundImg();
header();
logo();
description();
menuList();
contactForm();
