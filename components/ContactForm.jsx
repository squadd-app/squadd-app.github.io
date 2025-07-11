// components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [fields, setFields] = useState({
    fullname: "",
    email: "",
    handle: "",
    agency: "",
    message: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        "https://api.sheety.co/9d4c449e4d66d60f5b7b60ffb06da19e/squaddContactUs/sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheet1: {
              Fullname: fields.fullname,
              Email: fields.email,
              Handle: fields.handle,
              Agency: fields.agency,
              Message: fields.message,
            },
          }),
        }
      );
      if (res.ok) {
        setStatus("success");
        setFields({
          fullname: "",
          email: "",
          handle: "",
          agency: "",
          message: "",
        });
      } else throw new Error("Form error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white dark:bg-[#181828] py-20 px-4" id="contact">
      <div className="max-w-lg mx-auto rounded-xl shadow-xl p-10 bg-gradient-to-b from-[#fff] to-[#efeaff] dark:from-[#232343] dark:to-[#191928]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#e44fff] to-[#ff265b]">
          Get Early Access / Contact Us
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            value={fields.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="rounded-md px-4 py-2 border bg-white dark:bg-[#22223a] border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#ff265b] transition"
            required
          />
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded-md px-4 py-2 border bg-white dark:bg-[#22223a] border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#22d3ee] transition"
            required
          />
          <input
            type="text"
            name="handle"
            value={fields.handle}
            onChange={handleChange}
            placeholder="TikTok Handle"
            className="rounded-md px-4 py-2 border bg-white dark:bg-[#22223a] border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#e44fff] transition"
            required
          />
          <input
            type="text"
            name="agency"
            value={fields.agency}
            onChange={handleChange}
            placeholder="Agency (optional)"
            className="rounded-md px-4 py-2 border bg-white dark:bg-[#22223a] border-gray-300 dark:border-gray-600"
          />
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            placeholder="Message"
            className="rounded-md px-4 py-2 border bg-white dark:bg-[#22223a] border-gray-300 dark:border-gray-600 resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#ff265b] to-[#22d3ee] text-white font-bold shadow-lg hover:scale-105 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && (
            <div className="text-green-600 text-center font-semibold mt-2">
              Thanks! We’ll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-600 text-center font-semibold mt-2">
              Something went wrong. Try again!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
