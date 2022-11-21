// head
import bgPhoto from "../../resources/img/main_bg2.jpg"

// for me
import main_photo from '../../resources/img/main_photo2.jpg';

import mobileWeb from '../../resources/icons/about_me/mobile_dev.svg';
import webDev from '../../resources/icons/about_me/web_development.svg';

// experience
import university from '../../resources/icons/experience/university.svg';
import courses from '../../resources/icons/experience/courses.svg';
import developer from '../../resources/icons/experience/developer.svg';

// skills
import html5 from '../../resources/icons/skills/html5.svg';
import css3 from '../../resources/icons/skills/css3.svg';
import javaScript from '../../resources/icons/skills/js.svg';
import react from '../../resources/icons/skills/react.svg';
import nodeJs from '../../resources/icons/skills/node.js.svg';
import mongoBb from '../../resources/icons/skills/mongo.db.svg';

//portfolio
import buh from '../../resources/img/works/buh.jpg';
import marvel from '../../resources/img/works/marvel.jpg';

// for me
const competencies = [
    {
        id: '1',
        name: 'Web-разработка',
        descr: 'Верстка сайтов (визиток, лендингов, интернет магазинов) с адаптивным дизайном под мобильные устройства, под ключ.',
        img: webDev,
    },
    {
        id: '2',
        name: 'Разработка Web-приложений',
        descr: 'Создание SPA приложений с использованием всех современных технологий.',
        img: mobileWeb,
    },
]

// experience

const education = [
    {
        id: '1',
        name: 'ЛГУ им. А. С. Пушкина',
        title: 'Диплом специалиста | СПб (2009-2014)',
        descr: '',
        link: '',
        linkName: '',
        img: university,
    },
    {
        id: '2',
        name: 'UNDEMY',
        title: 'WEB-разработчик | 2022',
        descr: 'HTML (семантическая верстка, формы) и CSS (селекторы, flex, grid, анимации). Препроцессоры (SASS / Less / Stylus). Адаптивная и резистивная верстка. Таск менеджеры (gulp). Методология БЭМ. UI-библиотеки. ',
        link: 'https://www.udemy.com/certificate/UC-6a0d698b-849a-4736-b686-6cce0f0d854e/',
        linkName: 'Сертификат',

        img: courses,
    },
    {
        id: '3',
        name: 'UNDEMY',
        title: 'Полный курс по JavaScript + React + Redux | 2022',
        descr: 'JavaScript (DOM, замыкания, promises, async/await, fetch, классы). Инструменты и IDE (VSCode, Git, Webpack, npm, yarn). React + Redux (VDOM, JSX, компоненты, хуки, условный рендеринг, Redux Toolkit). React Router. Styled-components. Работа с готовыми Rest API',
        link: 'https://www.udemy.com/certificate/UC-bc2945a2-edb7-4ce1-80fd-73f8ac400f7e/',
        linkName: 'Сертификат',

        img: courses,
    },
]

const workExperience = [
    {
        id: '1',
        name: 'Фриланс',
        title: 'ООО "ФК "Бухэксперт"  | Архангельск (2022)',
        descr: 'Создание многостраничного сайта-приложения, для бухгалтерской аутсорс компании. Стэк: React, React Hook Form, Styled components, React Router, PHPMailer ',
        link: 'https://dudnik-a.ru/',
        linkName: 'Сайт',
        img: developer,
    },
]

// skills

const technologies = [
    {
        id: '1',
        name: 'HTML5',
        descr: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
        img: html5,
    },
    {
        id: '2',
        name: 'CSS3',
        descr: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
        img: css3,
    },
    {
        id: '3',
        name: 'Java Script',
        descr: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
        img: javaScript,
    },
    {
        id: '4',
        name: 'React',
        descr: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели',
        img: react,
    },
    {
        id: '5',
        name: 'Node.js',
        descr: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
        img: nodeJs,
    },
    {
        id: '6',
        name: 'Mongo.db',
        descr: 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения',
        img: mongoBb,
    },
]

const skills = [
    {
        id: '1',
        name: 'Создание сайтов',
        percent: '100%',
    },
    {
        id: '2',
        name: 'Создание приложений',
        percent: '85%',
    },
    {
        id: '3',
        name: 'Работа с данными',
        percent: '90%',
    },
    {
        id: '4',
        name: 'Креативность',
        percent: '75%',
    },
    {
        id: '5',
        name: 'Soft skills',
        percent: '95%',
    },
]

//portfolio

export const portfolio = [
    {
        id: '1',
        link: 'http://gachiclab.ru/',
        img: marvel,
    },
    {
        id: '2',
        link: 'https://dudnik-a.ru/',
        img: buh,
    },
]

// prises

export const prices = [
    {
        id: '1',
        name: 'Landing-page',
        price: 'от 25000 руб.',
        descr: 'Одностраничный сайт для презентации услуг/товаров/...',
    },
    {
        id: '2',
        name: 'Корпоративный сайт',
        price: 'от 80000 руб.',
        descr: 'Сайт для вашего бизнеса или компании',
    },
    {
        id: '3',
        name: 'Интернет-магазин',
        price: 'от 100000 руб.',
        descr: 'Инструмент для ваших продаж в сети',
    },
    {
        id: '4',
        name: 'Web-приложение',
        price: 'от 120000 руб.',
        descr: 'Приложение внутри браузера для лучшего комфорта',
    },
]



export const nav = [
    {
        id: '1',
        name: 'Главная',
        link: '',
        title: 'Меня зовут Александр Дудник',
        descr: 'Я frontend разработчик из города Санкт-Петербург',
        img: bgPhoto
    },
    {
        id: '2',
        name: 'Про меня',
        link: 'for-me',
        title: 'Меня зовут Александр',
        descr: 'С 2020 года развиваю себя как Frontend-разработчика. В этой работе я нахожу вдохновение т.к. она позволяет бесконечно развиваться, совершенствовать свои навыки. Потолка нет, в любой момент ты можешь открывать для себя все новые и новые уровни понимания - это круто! Разработка дает мне возможность самостоятельно реализовывать свои идеи и это мотивирует меня. Приходилось так же выступать и в роли заказчика программных продуктов (быть представителем от бизнеса), поэтому у меня есть опыт, как это выглядит с "другой стороны". Люблю упрощать сложное, систематизировать информацию и отлаживать бизнес процессы. Хорошо умею ладить с людьми, всегда стараюсь найти общий язык.',
        img: main_photo,
        content: competencies,
    },
    {
        id: '3',
        name: 'Опыт',
        link: 'experience',
        title: 'Чем я буду полезен',
        descr: '',
        education: education,
        workExperience: workExperience,
    },
    {
        id: '4',
        name: 'Навыки',
        link: 'skills',
        title: 'Что я использую в работе',
        descr: '',
        technologies: technologies,
        skills: skills,
    },
    {
        id: '5',
        name: 'Портфолио',
        link: 'portfolio',
        title: 'Мои работы',
        descr: '',
        portfolio: portfolio,
    },
    {
        id: '6',
        name: 'Прайс-лист',
        link: 'prices',
        title: '',
        descr: '',
        prices: prices,
    },
    {
        id: '7',
        name: 'Контакты',
        link: 'contact',
        title: 'Свяжитесь со мной',
        descr: '',
    },
]






