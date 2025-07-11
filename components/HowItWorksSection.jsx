const steps = [
  {
    number: 1,
    title: "Connect Your Inbox",
    description: "Securely link a dedicated collab email. Milo takes over your incoming offers.",
  },
  {
    number: 2,
    title: "Let Milo Work",
    description: "AI filters, scores, and summarizes every brand collab request—no manual checking.",
  },
  {
    number: 3,
    title: "Take Action Instantly",
    description: "Accept, reject, or ask for details—all with one click. Track deals in your live dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f5f6fa] dark:bg-[#1b1c23] py-20 px-4" id="howitworks">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#e44fff] via-[#22d3ee] to-[#ff265b] text-transparent bg-clip-text">
          How Does It Work?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {steps.map((s, i) => (
            <div key={i} className="bg-white dark:bg-[#242434] rounded-xl shadow-md flex-1 p-6 flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ff265b] via-[#e44fff] to-[#22d3ee] text-white text-2xl font-bold mb-4">
                {s.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
