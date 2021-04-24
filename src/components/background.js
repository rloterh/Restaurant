import image from '../images/backgound-image.jpg';

const backgroundImg = () => {
  document.body.style.background = `url(${image})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
};

export default backgroundImg; 