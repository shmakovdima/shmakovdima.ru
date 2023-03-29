import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dmitrii Shmakov | Frontend Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website, it\'s still in development', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, mate! I`m ',
  name: 'Dmitrii Shmakov',
  subtitle: 'Frontend Engineer & Community leader',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey! My name is Dmitrii. Awesome to see you here.',
  paragraphTwo: 'I have visited over 25 countries and am not going to stop.',
  paragraphThree: 'Now I work as a web software engineer at the company Revolut. I also organize meetups and developer conferences. I am interested in the web, machine learning, finances & investments and project management. My hobbies are photography, traveling, history, astronomy, running and other sports. And I completely forgot to mention about playing the ukulele.',
  resume: 'dmitrii_shmakov_cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'revolut.png',
    title: 'Revolut | Website',
    info: 'The main website of Revolut. Contains more than 50 thousand pages.',
    info2: 'This project uses React, Gatsby, Redux, TypeScript, styled-components, cypress, react-testing-library and own ui-kit.',
    url: 'https://revolut.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moscowjs.png',
    title: 'MoscowJS Meetup',
    info: 'Regular meetings of JavaScript developers in Moscow. Discussing frameworks, tools and processes. We share knowledge and personal experience in an informal setting.',
    info2: 'More than 48 meetups have already been held.',
    url: 'https://moscowjs.org',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'contact@shmakovdima.ru',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/shmakovdima',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/shmakovdima',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/shmakovdima',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shmakovdima',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
