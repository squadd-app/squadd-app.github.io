const steps = [
  {
    number: 1,
    title: "Connect Your Inbox",
    description: "Securely link a dedicated collab email. Dealer Expert AI Agent  takes over your incoming offers.",
  },
  {
    number: 2,
    title: "Let Dealer Expert AI Agent  Work",
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
    <section className="bg-[#f5f6fa] dark:bg-[#191928] py-10 md:py-20 px-2 md:px-4" id="howitworks">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#22d3ee] via-[#e44fff] to-[#ff265b] text-transparent bg-clip-text">
          How Does It Work?
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-white dark:bg-[#232343] rounded-xl shadow-lg p-4 md:p-8 mb-0 w-full max-w-md mx-auto flex flex-col items-center">
              {/* Numara yuvarlağı */}
              <div className="bg-gradient-to-r from-[#e44fff] via-[#22d3ee] to-[#ff265b] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mb-3">
                {step.number}
              </div>
              {/* Başlık */}
              <h3 className="text-center text-base md:text-xl font-semibold mb-2">{step.title}</h3>
              {/* Açıklama */}
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}