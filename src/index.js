import './css/styles.css';
import backgroundImg from './components/background';
import header from './components/navigation';
import { logo, description } from './pages/home';
import menu from './pages/menu';
// import form from './pages/contact';

import * as e from './components/elements';

e.home.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.content.appendChild(e.header);
  e.content.appendChild(e.main);
});

e.menu.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.content.appendChild(e.menuDiv).classList = 'd-flex flex-wrap justify-content-center';
});

// e.liThree.addEventListener('click', () => {
//   e.content.innerHTML = '';
//   e.content.appendChild(e.formTag).classList = 'bg-light rounded p-3 d-flex flex-column justify-content-center align-items-center';
// });

backgroundImg();
header();
logo();
description();
// form();
// menu();
