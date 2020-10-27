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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resume_old.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Revolut | Website',
    info: '',
    info2: '',
    url: 'https://revolut.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
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
      url: 'www.instagram.com/shmakovdima',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'shmakovdima',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'shmakovdima',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
