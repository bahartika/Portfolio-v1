import React from "react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/bahartikaa/",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/bahartika-satria-wijaya/",
    },
    {
      name: "WHATSAPP",
      href: "https://wa.link/tfkv3m",
    },
  ];

  return (
    <section className="text-secondary w-3/4 mx-auto py-12 md:px-10 md:py-20 font-quicksand" id="contact">
      <div className="grid md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-lilita mb-6 bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text font-extrabold text-transparent">GET IN TOUCH</h1>
          <p className="mb-4 text-sm">bahartikasatriawijaya@mail.com</p>
          <p className="text-sm max-w-md mb-8">Get to know who I am, what I do, and the story behind my personal and professional growth.</p>

          <p className="text-sm mb-2">CONTACT</p>

          <div className="flex flex-wrap gap-4 text-sm mt-6 text-secondary">
            {socialLinks.map(({ name, href }) => (
              <a key={name} href={href} className="underline underline-offset-4 hover:text-tersier" target="_blank" rel="noopener noreferrer">
                {name} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between" data-aos="fade-left">
          <div>
            <div className="text-sm mb-6 uppercase">
              <p className="font-semibold mb-1">Bandung, West Java</p>
              <p>Responsive by design — both in your interface and your lifestyle.</p>
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
