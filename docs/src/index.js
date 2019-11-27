'use strict';

//Импорт полифилов для старых браузеров
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";

//Импорт всех модулей со скриптами
import initializeClock from "./modules/timer";
import goTo from "./modules/scroll";
import toggleMenu from "./modules/navigation";
import togglePopUp from "./modules/modal";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import mouseHover from "./modules/foto";
import calc from "./modules/calc";
import sendForm from "./modules/form";
import inputValidate from "./modules/validator";
import carousel from "./modules/oopslider";

//Timer
//задаем дедлайн
// let deadline = '2015-12-31';
let deadline = new Date(Date.now() + 1 * 15 * 60 * 1000); /*час, минута, секунда, милисекунда*/
initializeClock('timer', deadline);
//плавная прокрутка по якорям на сайте  
goTo();
//меню навигации  
toggleMenu();
//модальное окно  
togglePopUp();
// реализация табов на странице  
tabs();
// слайдер  
slider();
//Секция наша команда Замена фото при наведении мыши  
mouseHover();
// Калькулятор  
calc(100);
// Валидация инпутов на ввод чисел
inputValidate();
//AJAX отправка данных из заполненой формы  
sendForm();
//слайдер в ООП стиле
carousel.init();