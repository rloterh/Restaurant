const content = document.querySelector('#content');
const header = document.createElement('header');
const logowrap = document.createElement('div');
const hlogo = document.createElement('div');
const hlogo2 = document.createElement('div');
const nav = document.createElement('nav');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
const main = document.createElement('main');
const convText = document.createElement('div');
const MenuOne = document.createElement('div');
const card = document.createElement('div');
const cardOne = document.createElement('button');
const cardOneImg = document.createElement('img');
const cardBody = document.createElement('div');
const cardTitle = document.createElement('h4');
const cardText = document.createElement('p');
const cardBtn = document.createElement('a');
const cardBtnDiv = document.createElement('div');
const contactForm = document.createElement('form');
const email = document.createElement('input');
const message = document.createElement('textarea');
const formGroup = document.createElement('div');
const submitBtn = document.createElement('button');

content.append(header, main);
header.append(logowrap);
logowrap.appendChild(hlogo);
header.appendChild(nav);
nav.append(home, menu, contact);
main.appendChild(hlogo2);
main.appendChild(convText);

export {
  content,
  header,
  logowrap,
  hlogo,
  hlogo2,
  nav,
  home,
  menu,
  contact,
  main,
  convText,
  MenuOne,
  card,
  formGroup,
  cardOne,
  cardOneImg,
  cardBody,
  cardTitle,
  cardText,
  cardBtn,
  cardBtnDiv,
  contactForm,
  email,
  message,
  submitBtn,
};
