import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'About Us - Dara 2.0' },
    {
      name: 'description',
      content: 'Learn more about our media company and the services we offer.',
    },
  ];
};

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">Learn more about our media company.</p>
    </div>
  );
}
