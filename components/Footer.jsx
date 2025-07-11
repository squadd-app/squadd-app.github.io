export default function Footer() {
  return (
    <footer className="w-full bg-[#19191C] text-white text-center py-6 mt-8">
      <div className="text-lg font-bold mb-1 tracking-wider">
        <span className="bg-gradient-to-r from-[#22d3ee] to-[#e44fff] text-transparent bg-clip-text">SQUADD</span>
      </div>
      <div className="mb-1">&copy; {new Date().getFullYear()} SQUADD. All rights reserved.</div>
      <div className="flex flex-wrap justify-center gap-4 text-xs text-white/90 mt-2">
        <a href="#" className="underline underline-offset-2 hover:text-[#25F4EE] transition">Privacy Policy (US)</a>
        <a href="#" className="underline underline-offset-2 hover:text-[#FE2C55] transition">Terms of Service</a>
      </div>
      <div className="mt-2 text-xs text-white/80">Made for TikTok Creators & Agencies | AI-Powered</div>
    </footer>
  );
}