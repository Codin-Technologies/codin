const values = [
  {
    icon: '🌱',
    title: 'Born',
    description:
      'The genesis of Codin Technologies - born from a vision to make advanced technology accessible to all organizations, regardless of size.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: '📈',
    title: 'Raise',
    description:
      'We elevate our clients through innovative solutions, helping SMEs grow, scale, and thrive in the digital economy.',
    color: 'from-emerald-500 to-green-600',
  },
];

const coreValues = [
  'Innovation',
  'Creativity',
  'TeamWork',
  'Professionalism',
  'Commitment',
  'Sustainability',
  'Success',
];

export function BornAndRaise() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Born and Raise: Our Story
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every great journey begins with a single step. At Codin, we were born 
            from a commitment to bridge the technology gap, and we raise businesses 
            to new heights through innovation.
          </p>
        </div>

        {/* Born & Raise Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:translate-x-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-3xl mb-6`}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
          <div className="flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

