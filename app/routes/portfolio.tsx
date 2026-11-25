// app/routes/portfolio.tsx
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Corporate Video Campaign',
      description:
        'A comprehensive video campaign for a leading corporate client.',
      image: 'https://via.placeholder.com/400x300?text=Corporate+Video',
      category: 'Video',
    },
    {
      id: 2,
      title: 'Product Photography',
      description: 'High-quality product photography for an e-commerce brand.',
      image: 'https://via.placeholder.com/400x300?text=Product+Photography',
      category: 'Photography',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Strategic social media content creation for a startup.',
      image: 'https://via.placeholder.com/400x300?text=Social+Media',
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Documentary Film',
      description:
        'A short documentary film about local community initiatives.',
      image: 'https://via.placeholder.com/400x300?text=Documentary',
      category: 'Video',
    },
    {
      id: 5,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design for a new company.',
      image: 'https://via.placeholder.com/400x300?text=Brand+Design',
      category: 'Design',
    },
    {
      id: 6,
      title: 'Event Coverage',
      description: 'Full event coverage for a major industry conference.',
      image: 'https://via.placeholder.com/400x300?text=Event+Coverage',
      category: 'Photography',
    },
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Check out some of our recent projects and works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-blue-500">
                  {project.category}
                </span>
                <h2 className="text-xl font-semibold mt-1 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
