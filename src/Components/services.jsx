import Responsive from "../assets/7438055.jpg";
import UI from "../assets/5741168.jpg";
import Opt from "../assets/laptop-with-internet-browser-search-bar-screen.jpg";

const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#9F6A69] mb-8 font-serif p-4 text-center">
          Services
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 pb-12">
        {/* Card Template */}
        {[
          {
            title: "Responsive Web Development",
            img: Responsive,
            desc: "Building modern, mobile-first websites that look and perform flawlessly across all devices.",
            tech: "Tech: HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS",
          },
          {
            title: "UI/UX Implementation",
            img: UI,
            desc: "Translating UI/UX designs into clean, interactive front-end interfaces with attention to detail and accessibility.",
            tech: "Focus: Pixel-perfect design, responsiveness, cross-browser compatibility",
          },
          {
            title: "Website Optimization & Debugging",
            img: Opt,
            desc: "Improving load times, fixing layout issues, and ensuring a smooth user experience through clean, optimized code.",
            tech: "Tools: Chrome DevTools, Lighthouse, GitHub, ESLint",
          },
        ].map(({ title, img, desc, tech }, index) => (
          <div key={index} className="flex justify-center items-stretch">
            <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full max-w-sm">
              <div className="mx-4 mt-4 overflow-hidden rounded-xl h-60">
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-1">
                <p className="text-base font-semibold mb-2 text-blue-gray-900">
                  {title}
                </p>
                <p className="text-sm text-gray-700 opacity-75 mb-2">{desc}</p>
                <strong className="text-sm block text-gray-800 mt-2">
                  {tech}
                </strong>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="w-full text-xs uppercase font-bold py-3 px-6 rounded-lg bg-blue-gray-100 text-blue-gray-900 transition-all hover:scale-105 hover:bg-blue-gray-200"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;
