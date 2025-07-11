// components/FeaturesSection.jsx
const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#22d3ee]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Smart Email Integration",
    description: "Connect your collab inbox. Milo auto-sorts, extracts details, and filters spam offers—no more clutter.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#ff265b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "AI Deal Scoring",
    description: "Get instant scores on every offer. Milo matches collabs to your style, audience, and past deals for smarter decisions.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#e44fff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M16 3h-1a2 2 0 0 0-2 2v3" />
      </svg>
    ),
    title: "Automated Workflows",
    description: "Save hours with AI-driven responses, editable templates, and a real-time status dashboard—focus on creating, not admin.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white dark:bg-[#17171f] py-20 px-4" id="features">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#e44fff] via-[#22d3ee] to-[#ff265b] text-transparent bg-clip-text">
          What Makes SQUADD Different?
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10">
          TikTok creators and agencies get more done in less time. Stop drowning in emails, start growing your brand.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-gradient-to-b from-[#f5f6fa] to-[#efeaff] dark:from-[#181828] dark:to-[#232343] rounded-2xl p-8 shadow-lg flex-1 flex flex-col items-center hover:scale-105 transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-base">
          <strong>Milo</strong> is just the beginning. <span className="text-[#e44fff] font-semibold">More AI agents coming soon...</span>
        </div>
      </div>
    </section>
  );
}
