import * as e from '../components/elements';

const logo = () => {
  e.hlogo2.textContent = 'BurgerBest';
  e.hlogo2.className += 'hlogo d-lg-none';
};

const description = () => {
  e.convText.textContent = 'munch burgers that\'s best you can!';
  e.convText.className += 'conv-text h3 px-2';
};

e.mainOne.className = 'main d-flex flex-column align-items-center justify-content-center px-md-5';
document.body.classList = 'text-white';

export { logo, description };
