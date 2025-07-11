export default function ContactForm() {
  return (
    <section className="bg-white dark:bg-[#181828] py-20 px-4" id="contact">
      <div className="w-full max-w-lg mx-auto rounded-2xl shadow-xl p-4 md:p-8 bg-gradient-to-b from-[#fff] to-[#efeaff] dark:from-[#232343] dark:to-[#191928]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#e44fff] to-[#ff265b]">
          Get Early Access / Contact Us
        </h2>
        <div className="flex flex-col items-center">
          <p className="mb-4 text-center text-base text-gray-600 dark:text-gray-200">
            For early access or business inquiries,<br />
            just send us an email!
          </p>
          <a
            href="mailto:dev@squadd.ai?subject=Squadd%20Contact%20-%20Early%20Access&body=Full%20Name%3A%0AEmail%3A%0ATikTok%20Handle%3A%0AAgency%3A%0AMessage%3A"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#22d3ee] via-[#e44fff] to-[#ff265b] text-white font-bold shadow-md transition hover:scale-105 text-lg"
          >
            Email Us at <span className="underline">dev@squadd.ai</span>
          </a>
        </div>
      </div>
    </section>
  );
}
