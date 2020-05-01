////form validate and ajax

let sendBtn = document.querySelector('.btn_send');
let myForm = document.querySelector('#form');
let message = document.querySelector('.message');
let messageBtn = document.querySelector(".btn_close_message");


sendBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  
  if (validateForm(myForm)) {
    const formData = new FormData();
  
    
    formData.append("name", myForm.elements.name.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.person_comment.value);
    formData.append("to", "example@mail.ru");

  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      console.log(xhr.response.status);
    });
    
    messageHide();

  };

});


function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.street)) {
    valid = false;
  }

  if (!validateField(form.elements.person_home)) {
    valid = false;
  }

  if (!validateField(form.elements.person_apartment)) {
    valid = false;
  }

  return valid;
}



function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
};

function messageHide() {
  message.classList.remove("visually-hidden");

  messageBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    message.classList.add('visually-hidden');
  });

};

