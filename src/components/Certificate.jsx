import { useState } from "react";
import data from "../utils/index";

function Certificate() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="w-full px-10 sm:px-8 md:px-10 lg:px-20 lg:w-3/4 mx-auto py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text font-extrabold text-transparent text-center" data-aos="fade-up">
          My Learning Achievements
        </h1>
        <p className="sm:text-lg mb-6 font-quicksand text-secondary text-center">A collection of courses and certifications that showcase my dedication to learning and self-improvement.</p>

        <div>
          {data.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-4 border-secondary font-quicksand">
              <div onClick={() => handleToggle(index)} className="flex items-center justify-between cursor-pointer text-lg sm:text-xl font-medium text-secondary">
                <span className="font-semibold">{faq.title}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>

              <div className={`overflow-hidden transition-all duration-800 ease-in-out ${activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col sm:flex-row mt-4 gap-4 sm:items-start">
                  <img src={faq.image} alt={`Certificate of ${faq.title}`} className="w-full sm:w-48 aspect-video object-cover cursor-pointer hover:scale-105 transition rounded-md" onClick={() => setSelectedImage(faq.image)} />
                  <p className="text-secondary text-sm sm:text-base">{faq.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer px-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Certificate Full" className="max-w-full max-h-[90%] rounded-lg shadow-xl border-4 border-white object-contain" />
        </div>
      )}
    </div>
  );
}

export default Certificate;
