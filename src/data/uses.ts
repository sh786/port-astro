export type TwoColumnTextSection = {
  title: string;
  leftColItems: string[];
  rightColItems: string[];
};

export const uses: TwoColumnTextSection[] = [
  {
    title: 'hardware',
    leftColItems: [
      'Macbook Pro 16” 2019, 2.6Ghz 6-Core i7, 16GB DDR4',
      'LG 34" Ultrawide Curved WQHD IPS Monitor (34WL75C-B)',
      'Dell UltraSharp IPS LCD 24-Inch Screen LED-Lit Monitor (U2419H)',
      'Apple Magic Mouse 2',
      'Keychron K7 Keyboard',
      'Apple Magic Keyboard (for travel)',
      'iPhone 12 Pro',
      'Nulaxy Portable Laptop Stand',
      'DJI Mavic Pro Drone',
    ],
    rightColItems: [],
  },
  {
    title: 'apps',
    leftColItems: [
      'Microsoft Virtual Studio Code',
      'Google Chrome Canary',
      'Firefox Developer Edition',
      'Figma',
      'Notion',
      'Spotify',
      'Rectangle',
    ],
    rightColItems: [
      'Charles',
      'Insomnia',
      'Itsycal',
      'Alfred',
      'Slack',
      'Jira',
      'MeetingBar',
    ],
  },
  {
    title: 'languages / libraries',
    leftColItems: [
      'JavaScript',
      'React / Redux / Zustand',
      'React Native',
      'Vue / Nuxt',
      'SolidJS',
      'Astro',
      'GraphQL / Apollo',
    ],
    rightColItems: [
      'Jest & Cypress',
      'Node.js',
      'AWS Amplify',
      'D3.js',
      'SQL',
      'Python',
      'Java',
    ],
  },
];
