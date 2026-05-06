import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="w-full py-20">
      <div className="">
        
        {/* Heading */}
        <h2 className="font-mono text-sm mb-2 text-gray-500 uppercase tracking-[0.3em]">
          Contact
        </h2>
        <h3 className="text-4xl font-semibold mb-12">
          Let’s work together
        </h3>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5">

            {[
              { label: "EMAIL", value: "levinjustin.salamat@gmail.com" },
              { label: "GITHUB", value: "github.com/levinslmt" },
              { label: "LINKEDIN", value: "linkedin.com/in/levinjstn" },
              { label: "LOCATION", value: "Philippines" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 hover:border-black transition"
              >
                <p className="text-xs font-mono text-gray-400 mb-1 tracking-widest">
                  {item.label}
                </p>
                <p className="text-sm">{item.value}</p>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE (FORM) */}
          <form className="flex flex-col gap-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
            >
              Send message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;