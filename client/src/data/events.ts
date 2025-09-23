export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Annual Education Conference',
    description: 'Keeping you updated is as good as education, of what good are we if we cannot bring the most recent update in education to you, we cannot do that without you.',
    date: '2025-03-17',
  },
  {
    id: 2,
    title: 'To Celebrate World Education Day',
    description: 'Every experience counts and every action contributes to creating the awareness we so badly need at the moment.',
    date: '2025-07-17',
  },
  {
    id: 3,
    title: 'Annual Award/Fundraising Dinner',
    description: 'After an eventful year, recognizing the top ranked and dedicated donors/staff and at the same time making sure we are ready for the coming year is not such a bad idea.',
    date: '2025-05-17',
  },
];
