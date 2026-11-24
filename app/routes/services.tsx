import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Our Services - Dara 2.0' },
    {
      name: 'description',
      content:
        'Explore our wide range of media services including video production, photography, and digital marketing.',
    },
  ];
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Video Production',
      description:
        'Professional video production for commercials, documentaries, and social media content.',
      icon: '🎥',
    },
    {
      id: 2,
      title: 'Photography',
      description:
        'High-quality photography for events, products, and corporate needs.',
      icon: '📸',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description:
        'Strategic digital marketing campaigns to grow your brand online.',
      icon: '📈',
    },
    {
      id: 4,
      title: 'Content Creation',
      description:
        'Engaging content creation for blogs, social media, and websites.',
      icon: '✍️',
    },
    {
      id: 5,
      title: 'Graphic Design',
      description:
        'Creative graphic design for branding, logos, and marketing materials.',
      icon: '🎨',
    },
    {
      id: 6,
      title: 'Event Coverage',
      description:
        'Comprehensive event coverage including photography and videography.',
      icon: '🎉',
    },
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          We offer a wide range of media services to help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
