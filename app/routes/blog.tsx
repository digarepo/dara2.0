import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Our Blog - Dara 2.0' },
    {
      name: 'description',
      content:
        'Explore our wide range of media services including video production, photography, and digital marketing.',
    },
  ];
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Digital Media',
      excerpt:
        'Exploring the latest trends in digital media and how they shape our world.',
      author: 'Abel',
      date: '2026-01-15',
      image: 'https://via.placeholder.com/400x250?text=Digital+Media',
    },
    {
      id: 2,
      title: 'Behind the Scenes: Video Production',
      excerpt:
        'A look at our creative process for producing high-quality video content.',
      author: 'Abel',
      date: '2026-01-10',
      image: 'https://via.placeholder.com/400x250?text=Video+Production',
    },
    {
      id: 3,
      title: 'Tips for Better Photography',
      excerpt:
        'Simple techniques to improve your photography skills and capture stunning images.',
      author: 'Abel',
      date: '2026-01-05',
      image: 'https://via.placeholder.com/400x250?text=Photography',
    },
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Read our latest articles and insights.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
