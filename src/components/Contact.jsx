import React from "react";

const ContactSection = () => {
  return (
    <section className="text-secondary w-3/4 mx-auto py-12 md:px-10 md:py-20 font-quicksand" id="contact">
      <div className="grid md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-lilita mb-6 bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text font-extrabold text-transparent">GET IN TOUCH</h1>
          <p className="mb-4 text-sm">bahartikasatriawijaya@mail.com</p>
          <p className="text-sm max-w-md mb-8">Get to know who I am, what I do, and the story behind my personal and professional growth.</p>

          <p className="text-sm mb-2">CONTACT</p>

          <div className="flex flex-wrap gap-4 text-sm mt-6 text-secondary">
            {["INSTAGRAM", "LINKEDIN"].map((platform) => (
              <a key={platform} href="#" className="underline underline-offset-4 hover:text-tersier">
                {platform} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between" data-aos="fade-left">
          <div>
            <div className="mb-4 text-sm">
              <p>+628121438920</p>
            </div>
            <div className="text-sm mb-6">
              <p className="font-semibold mb-1">UNITED STATES</p>
              <p>EXPERIENCE UNMATCHED LUXURY WITH OUR PREMIUM LEATHER BAGS, EXPERTLY</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold mb-1">DENMARK</p>
              <p>EXPERIENCE UNMATCHED LUXURY WITH OUR PREMIUM LEATHER BAGS, EXPERTLY</p>
            </div>
          </div>

          <div className="flex justify-between items-end mt-8">
            <img src="/path-to-your-image.jpg" alt="Contact visual" className="w-32 h-auto object-cover" />
            <div className="text-4xl font-bold">© 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
