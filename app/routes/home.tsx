// app/routes/home.tsx
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Dara 2.0</h1>
          <p className="text-xl mb-8">Your gateway to amazing media content</p>
          <a
            href="/portfolio"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            View Our Work
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Blog</h3>
              <p className="text-gray-600">
                Read our latest articles and insights
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
              <p className="text-gray-600">Check out our recent projects</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">Learn more about our team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
