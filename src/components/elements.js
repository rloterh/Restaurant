const docBody = document.body;
const content = document.querySelector('#content');
const header = document.createElement('header');
const logowrap = document.createElement('div');
const hlogo = document.createElement('div');
const hlogo2 = document.createElement('div');
const nav = document.createElement('nav');
const homeLink = document.createElement('div');
const menuLink = document.createElement('div');
const contactLink = document.createElement('div');
const mainOne = document.createElement('main');
const mainTwo = document.createElement('main');
const mainThree = document.createElement('main');
const convText = document.createElement('div');
const menuOne = document.createElement('div');
const menuTwo = document.createElement('div');
const menuThree = document.createElement('div');
const cardOne = document.createElement('div');
const cardTwo = document.createElement('div');
const cardThree = document.createElement('div');
const cardOneImg = document.createElement('img');
const cardTwoImg = document.createElement('img');
const cardThreeImg = document.createElement('img');
const cardOneBody = document.createElement('div');
const cardTwoBody = document.createElement('div');
const cardThreeBody = document.createElement('div');
const cardOneTitle = document.createElement('h4');
const cardTwoTitle = document.createElement('h4');
const cardThreeTitle = document.createElement('h4');
const cardOneText = document.createElement('p');
const cardTwoText = document.createElement('p');
const cardThreeText = document.createElement('p');
const cardOneBtn = document.createElement('a');
const cardTwoBtn = document.createElement('a');
const cardThreeBtn = document.createElement('a');
const cardOneBtnDiv = document.createElement('div');
const cardTwoBtnDiv = document.createElement('div');
const cardThreeBtnDiv = document.createElement('div');
const contactForm = document.createElement('form');
const contactFormDiv = document.createElement('div');
const email = document.createElement('input');
const message = document.createElement('textarea');
const formGroupOne = document.createElement('div');
const formGroupTwo = document.createElement('div');
const submitBtn = document.createElement('button');

docBody.insertBefore(header, content);
content.appendChild(mainOne);
header.append(logowrap);
logowrap.appendChild(hlogo);
header.appendChild(nav);
nav.append(homeLink, menuLink, contactLink);
mainOne.appendChild(hlogo2);
mainOne.appendChild(convText);

export {
  docBody,
  content,
  header,
  logowrap,
  hlogo,
  hlogo2,
  nav,
  homeLink,
  menuLink,
  contactLink,
  mainOne,
  mainTwo,
  mainThree,
  convText, 
  menuOne, 
  menuTwo,
  menuThree,
  cardOne,
  cardTwo,
  cardThree,
  cardOneImg,
  cardTwoImg,
  cardThreeImg,
  cardOneBody,
  cardTwoBody,
  cardThreeBody,
  cardOneTitle,
  cardTwoTitle,
  cardThreeTitle,
  cardOneText,
  cardTwoText,
  cardThreeText,
  cardOneBtn,
  cardTwoBtn,
  cardThreeBtn,
  cardOneBtnDiv,
  cardTwoBtnDiv,
  cardThreeBtnDiv,
  contactForm,
  contactFormDiv,
  email,
  message,
  formGroupOne,
  formGroupTwo,
  submitBtn,
};
