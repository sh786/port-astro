import rttImg from '@/img/react-tac-toe.png';
import linkScraperImg from '@/img/linscraper.png';
import onebiteImg from '@/img/onebite.png';
import coasterImg from '@/img/coaster.png';
import mlbPostseasonImg from '@/img/mlbpostseason.png';
import pittHomesImg from '@/img/pitthomes.png';
import type { PageItemProps } from '@/core/components/PageItem';

export const works: PageItemProps[] = [
  {
    title: 'React-Tac-Toe',
    description:
      'A 2-player tic-tac-toe game built with game state and results stored in localStorage',
    meta: 'Built with: React, TypeScript, and Apollo Client',
    webUrl: 'https://sh786.github.io/react-tac-toe/',
    githubUrl: 'https://github.com/sh786/react-tac-toe',
    imagePath: rttImg,
  },
  {
    title: 'Linscraper',
    description:
      'LinkedIn scraper browser extension to save profile data to selected database tables for easy .csv export',
    meta: 'Built with: React',
    videoUrl: 'https://youtu.be/F5iiSh65Sfs',
    githubUrl: 'https://github.com/sh786/linscrape',
    imagePath: linkScraperImg,
  },
  {
    title: 'One Bite Header & Carousel',
    description:
      'Mini-exercise to mockup a responsive One Bite data-driven site (nav and carousel)',
    meta: 'Built with: React',
    webUrl: 'https://sh786.github.io/bs-one-bite-exercise/',
    githubUrl: 'https://github.com/sh786/bs-one-bite-exercise',
    imagePath: onebiteImg,
  },
  {
    title: 'Coaster Mobile App',
    description:
      'Cross-platform mobile app to acquire free or priced entrance to local venues via QR codes',
    meta: 'Built with: React Native, Redux, AWS Amplify, GraphQL',
    githubUrl: 'https://github.com/sh786/Coaster',
    imagePath: coasterImg,
  },
  {
    title: 'MLB Postseason',
    description:
      'A mini react project created to view the 2018 MLB Postseason schedule and results',
    meta: 'Built with: React, TypeScript, Firebase and TailwindCSS',
    webUrl: 'https://sh786.github.io/postseason/',
    githubUrl: 'https://github.com/sh786/postseason',
    imagePath: mlbPostseasonImg,
  },
  {
    title: 'PittHomes',
    description:
      'Dynamic Home Buying Tool for city of Pittsburgh based on a dataset from Zillow',
    meta: 'Built with: D3.js and jQuery',
    webUrl: 'http://pitthomes.surge.sh/',
    githubUrl: 'https://github.com/sh786/info4310hw4',
    imagePath: pittHomesImg,
  },
];
