import * as e from '../components/elements';
import menuOneImg from '../images/m1.jpg';
import menuTwoImg from '../images/m2.jpg';
import menuThreeImg from '../images/m3.jpg';

const cardOne = () => {
  e.mainTwo.appendChild(e.menuOne).className = 'menu p-2';
  e.menuOne.appendChild(e.cardOne).className = 'card text-dark';
  e.cardOne.style.width = '18rem';
  e.cardOne.appendChild(e.cardOneImg).className = 'card-img-top';
  e.cardOneImg.src = menuOneImg;
  e.cardOne.appendChild(e.cardOneBody).className = 'card-body';
  e.cardOneBody.appendChild(e.cardOneTitle).className = 'card-title text-center';
  e.cardOneTitle.textContent = '$ 16';
  e.cardOneBody.appendChild(e.cardOneText).className = 'card-text text-center text-capitalize';
  e.cardOneText.innerHTML = '<span class="fw-bold">portobello mushroom burger</span><br>Cheese, beef, hot veggies and spicies added';
  e.cardOneBody.appendChild(e.cardOneBtnDiv).className = 'd-flex justify-content-center';
  e.cardOneBtnDiv.appendChild(e.cardOneBtn).className = 'btn btn-primary text-capitalize fw-bold';
  e.cardOneBtn.textContent = 'place order';
};

const cardTwo = () => {
  e.mainTwo.appendChild(e.menuTwo).className = 'menu p-2';
  e.menuTwo.appendChild(e.cardTwo).className = 'card text-dark';
  e.cardTwo.style.width = '18rem';
  e.cardTwo.appendChild(e.cardTwoImg).className = 'card-img-top';
  e.cardTwoImg.src = menuTwoImg;
  e.cardTwo.appendChild(e.cardTwoBody).className = 'card-body';
  e.cardTwoBody.appendChild(e.cardTwoTitle).className = 'card-title text-center';
  e.cardTwoTitle.textContent = '$ 15';
  e.cardTwoBody.appendChild(e.cardTwoText).className = 'card-text text-center text-capitalize';
  e.cardTwoText.innerHTML = 'creamy lettuce burger</span><br>Cheese, beef, hot veggies and spicies added';
  e.cardTwoBody.appendChild(e.cardTwoBtnDiv).className = 'd-flex justify-content-center';
  e.cardTwoBtnDiv.appendChild(e.cardTwoBtn).className = 'btn btn-primary text-capitalize fw-bold';
  e.cardTwoBtn.textContent = 'place order';
};

const cardThree = () => {
  e.mainTwo.appendChild(e.menuThree).className = 'menu p-2';
  e.menuThree.appendChild(e.cardThree).className = 'card text-dark';
  e.cardThree.style.width = '18rem';
  e.cardThree.appendChild(e.cardThreeImg).className = 'card-img-top';
  e.cardThreeImg.src = menuThreeImg;
  e.cardThree.appendChild(e.cardThreeBody).className = 'card-body';
  e.cardThreeBody.appendChild(e.cardThreeTitle).className = 'card-title text-center';
  e.cardThreeTitle.textContent = '$ 13';
  e.cardThreeBody.appendChild(e.cardThreeText).className = 'card-text text-center text-capitalize';
  e.cardThreeText.innerHTML = '<span class="fw-bold">bean burger</span><br>Pumpkin, beetroot, hot veggies and spicies added';
  e.cardThreeBody.appendChild(e.cardThreeBtnDiv).className = 'd-flex justify-content-center';
  e.cardThreeBtnDiv.appendChild(e.cardThreeBtn).className = 'btn btn-primary text-capitalize fw-bold';
  e.cardThreeBtn.textContent = 'place order';
};

const menuList = () => {
  e.mainTwo.className = 'main-menu d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap px-md-5 mt-md-5';
  cardOne();
  cardTwo();
  cardThree();
};

export default menuList;
