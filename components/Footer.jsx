// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#e44fff] via-[#22d3ee] to-[#ff265b] text-white text-center py-6 mt-10">
      <div className="text-lg font-bold mb-1 tracking-wider">SQUADD</div>
      <div className="mb-1">
        &copy; {new Date().getFullYear()} SQUADD. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-xs text-white/90 mt-2">
        <a href="#" className="underline underline-offset-2 hover:text-white/70">
          Privacy Policy (US)
        </a>
        <a href="#" className="underline underline-offset-2 hover:text-white/70">
          Terms of Service
        </a>
      </div>
      <div className="mt-2 text-xs text-white/80">
        Made for TikTok Creators & Agencies | AI-Powered
      </div>
    </footer>
  );
}
