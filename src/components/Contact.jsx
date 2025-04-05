const Contact = () => {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">📫 Contact</h2>
      <p className="mb-6">Silakan hubungi saya melalui platform berikut:</p>

      <div className="flex flex-col items-center gap-3">
        {/* Email */}
        <a href="mailto:emailkamu@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          ✉️ emailkamu@gmail.com
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/usernamekamu" target="_blank" rel="noreferrer" className="bg-[#0077B5] text-white px-4 py-2 rounded-full hover:brightness-110 transition">
          🔗 LinkedIn
        </a>

        {/* GitHub */}
        <a href="https://github.com/usernamekamu" target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
          💻 GitHub
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
          💬 WhatsApp
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/usernamekamu" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:brightness-110 transition">
          📸 Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
