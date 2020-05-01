let personFeedbackOne = {
 image: "./img/alen.png",
 title: "Лучший перекус",
 description: "Я ем малыми порциями, но часто. Это повышает мою продуктивность в разы. В течение дня сижу за компьютером  и часто отходить в кафе или на кухню просто не могу себе позволить. А батончик – он всегда под рукой. Это приятно и удобно. ",
 name: "Алена Хмельницкая"
};

let personFeedbackTwo = {
 image: "./img/maria.png",
 title: "Лучшие батончики премиум уровня",
 description: "Батончики понравились. На мой взгляд слегка завышена цена по сравнению с конкурентами, однако, как говорится – оно того стоит. Нравится носить с собой, нравится держать в руке. Ну и конечно же, кушать. Идеально утоляют голод, хоть и не надолго. Через час уже ем ещё один. Но это скорее плюс, чем минус.",
 name: "Мария Орлова"
};

let personFeedbackThree = {
 image: "./img/vadim.png",
 title: "Идеально подходят для спортсменов",
 description: "После тренировок всегда хочется быстро закинуться чем-то белковым, потому что до дома ещё нужно доехать. А кушать хочется. Протеиновые батончики всегда выручают в этом плане. Спасибо производителю за этот качественный и экологичный продукт. ",
 name: "Вадим Грачев"
};

let arrayFeed = [personFeedbackOne, personFeedbackTwo, personFeedbackThree];

let feedBtn = document.querySelectorAll(".feedback_list__item");

let avatar = document.querySelector('.feedback__avatar');
let feedName = document.querySelector('.feedback_person');
let feedTitle = document.querySelector('.feedback__title');
let feedText = document.querySelector('.feedback__text');


let feedSelect = () => {
 for (let i = 0; i < feedBtn.length; i++) {
   feedBtn[i].addEventListener('click', (evt) => {
     evt.preventDefault();
     for (let j = 0; j < feedBtn.length; j++){
       feedBtn[j].classList.remove("feedback_list__item-active");
     };

     feedBtn[i].classList.add("feedback_list__item-active");
     avatar.setAttribute('src', arrayFeed[i].image);
     feedName.textContent = arrayFeed[i].name;
     feedTitle.textContent = arrayFeed[i].title;
     feedText.textContent = arrayFeed[i].description;
   });
 }
}


feedSelect();