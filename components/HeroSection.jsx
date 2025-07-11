export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#121212] to-[#21222d] text-white py-16 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e44fff] via-[#22d3ee] to-[#ff265b] animate-gradient">
        SQUADD
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-6 text-gray-200 max-w-2xl text-center">
        Supercharge your TikTok collabs. <span className="text-[#22d3ee] font-bold">AI-powered dealmaking,</span> opportunity management, and admin made effortless for creators & agencies.
      </p>
      <a
        href="#contact"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff265b] to-[#22d3ee] text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
      >
        Get Early Access
      </a>
      <p className="mt-6 text-xs text-gray-400 font-light">
        Powered by <span className="font-semibold text-[#e44fff]">Milo</span> – your personal AI deal expert.
      </p>
    </section>
  );
}
