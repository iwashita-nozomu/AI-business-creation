export default function Features() {
  const features = [
    {
      icon: '📋',
      title: 'Business Plan Template',
      description: 'AI-powered business plan generator'
    },
    {
      icon: '📊',
      title: 'Financial Projections',
      description: 'Automated financial modeling tools'
    },
    {
      icon: '⚖️',
      title: 'Legal Compliance',
      description: 'Industry-specific legal guidelines'
    },
    {
      icon: '🎯',
      title: 'Market Analysis',
      description: 'Comprehensive market research data'
    },
    {
      icon: '👥',
      title: 'Networking Hub',
      description: 'Connect with investors and partners'
    },
    {
      icon: '📚',
      title: 'Learning Resources',
      description: 'Expert tutorials and courses'
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to successfully launch your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
