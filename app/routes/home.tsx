import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dara 2.0 - Home' },
    {
      name: 'description',
      content: 'Welcome to Dara 2.0, your gateway to amazing media content.',
    },
  ];
};

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Dara2.0</h1>
      <p className="mt-4">
        This is the home page of our media company website.
      </p>
    </div>
  );
}
