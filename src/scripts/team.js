
let personBtn = document.querySelectorAll('.person_title');
let personDescription = document.querySelectorAll('.person_block__description');

let personShowHide = () => {

  for (let i = 0; i < personBtn.length; i++) {
    personBtn[i].addEventListener('click', () => {
      personDescription[i].classList.toggle("person_block__description-active");
      personBtn[i].classList.toggle('person_title-active');
    });
  }
};

personShowHide();