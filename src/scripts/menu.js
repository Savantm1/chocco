

let menuTitle = document.querySelectorAll(".title_block");
let menuDescription = document.querySelectorAll(".item_description_block");
let menuCloseBtn = document.querySelectorAll('.cross_btn');

let menuShowHide = () => {

  for (let i = 0; i < menuTitle.length; i++){

    menuTitle[i].addEventListener('click', (evt) => {
      
      evt.preventDefault();
      for (let j = 0; j < menuTitle.length; j++){
        
        menuDescription[j].classList.remove('item_description_block-active')
        menuCloseBtn[i].style = "display:none";
      };

      menuDescription[i].classList.toggle('item_description_block-active');
      menuCloseBtn[i].style = "display:block";
    });

    menuCloseBtn[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      for (let i = 0; i < menuCloseBtn.length; i++){

        menuDescription[i].classList.remove('item_description_block-active');
        menuCloseBtn[i].style = "display:none";
      };
    })

  };
};

menuShowHide();
