// Назначаем переменную на кнопку переключения слайда вперед-назад
const prev = document.getElementById('portfolio-btn-prev');
const next = document.getElementById('portfolio-btn-next');

//  Помещаем все слайды в один массив
const slides = document.querySelectorAll('.portfolio-slide');  //с помощью класса .slide мы получили некий массивчик

// Обозначаем переменную, с помощью которой будем определять какой слайд активен в данный момент
let index = 0;

// Пишем функцию, которая ставит активный слайд
const activeSlide = n => {  // n - это номер слайда, который стоит сейчас активным
    for(slide of slides) {  // с помощью метода for-of пробегаемся по псевдомассиву slides и переменную называем slide
      slide.classList.remove('active'); //обращаемся к каждому слайду и убираем класс active у них
    }
    slides[n].classList.add('active');  // обращаемся к массиву по индексу [n] и к текущему добавляем класс active
}

// объявляем переменную для вызова функций activeSlide и activeDot
const prepareCurrentSlide = ind => {
    activeSlide(ind);  //как только мы меняем index, мы и вызываем функцию activeSlide
}

// пишем функцию для кнопок next
const nextSlide = () => {  // функция ничего принимать не будет. Будет обычная стрелочная функция
    if(index == slides.length - 1) {  // с помощью if обращаемся к псевдомассиву slides и вычитаем 1 от его длины, тем самым получаем последний элемент(слайд)
        index = 0;  // и возвращаемся к первому слайду
        prepareCurrentSlide(index);  //вызов функции
    } else {  // иначе, если слайд не последний, а первый
        index++;  // то мы увеличиваем index на единицу = переключение на один вперед, а не через один
        prepareCurrentSlide(index);  //вызов функции
    }
}

// пишем функцию для кнопок prev
const prevSlide = () => {  // функция ничего принимать не будет. Будет обычная стрелочная функция
    if(index == 0) {  // с помощью if обращаемся к псевдомассиву slides и к первому слайду (0)
        index = slides.length - 1;  // и возвращаемся к предыдущему слайду
        prepareCurrentSlide(index);  //вызов функции
    } else {  // иначе, если слайд не первый, а последний
        index--;  // то мы уменьшаем index на единицу = переключение на один назад, а не через один
        prepareCurrentSlide(index);  //вызов функции
    }
}

// Вешаем событие на кнопку next
next.addEventListener('click', nextSlide);  //с помощью метода addEventListener указываем событие click и передаем функцию nextSlide

// Вешаем событие на кнопку prev
prev.addEventListener('click', prevSlide);  //с помощью метода addEventListener указываем событие click и передаем функцию nextSlide
