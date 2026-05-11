export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Turn Your Business Idea into Reality
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our comprehensive platform guides you through every step of business creation, from planning to launch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get Started Free
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Watch Demo
          </button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">5K+</div>
            <p className="text-gray-600">Businesses Created</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
