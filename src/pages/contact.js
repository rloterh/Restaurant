import * as e from '../components/elements';

const contactForm = () => {
  e.mainThree.appendChild(e.contactFormDiv).className = 'contact p-2';
  e.contactFormDiv.appendChild(e.contactForm);
  e.contactForm.appendChild(e.formGroupOne).className = 'form-group';
  e.formGroupOne.appendChild(Object.assign(e.email, {
    type: 'email',  placeholder: 'Email',  }),  ).classList = 'form-control';
  e.contactForm.appendChild(e.formGroupTwo).className = 'form-group my-2';
  e.formGroupTwo.appendChild(Object.assign(e.message, { rows: '3',
    placeholder: 'Message', }), ).classList = 'form-control';
  e.contactForm.appendChild(e.submitBtn).className = 'btn btn-primary';
  e.submitBtn.textContent = 'Submit';
  e.mainThree.className = 'main d-flex flex-column align-items-center justify-content-center px-md-5';
};

export default contactForm;