import popular1 from '../assets/images/popular-1.jpg';
import popular2 from '../assets/images/popular-2.jpg';
import popular3 from '../assets/images/popular-3.jpg';
import popular4 from '../assets/images/popular-4.jpg';

export interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
  goal: number;
  funded: number;
  backers: number;
  daysLeft: number;
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'To save 100 students from dropping out of school',
    description: 'help us save some student from dropping out of school, there parent and guidian can no longer fund them we need you to keep them in school',
    image: popular1,
    goal: 10000,
    funded: 7000,
    backers: 175,
    daysLeft: 12,
  },
  {
    id: 2,
    title: 'Fund 1000 slum kids to School',
    description: 'They are unfortunate to find themselves in the slum but they do not have to end in the slum, help us send 1000 kids from slum to school.',
    image: popular2,
    goal: 25000,
    funded: 7000,
    backers: 175,
    daysLeft: 12,
  },
  {
    id: 3,
    title: 'Renovate our school',
    description: 'We cannot over estimate the importance of a condusive learning environment, we need to renoovate our school to keep it condusive fro our students.',
    image: popular3,
    goal: 5000,
    funded: 3750,
    backers: 175,
    daysLeft: 12,
  },
  {
    id: 4,
    title: 'To support flood affected schools',
    description: 'We did not plan for it but it happened, now we are let with the aftermath, our school is gone, we need your help to rescconstruct our school and get our lives back to normal.',
    image: popular4,
    goal: 15000,
    funded: 11250,
    backers: 175,
    daysLeft: 12,
  },
];
