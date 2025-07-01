import Responsive from '../assets/7438055.jpg'
import UI from '../assets/5741168.jpg'
import Opt from '../assets/laptop-with-internet-browser-search-bar-screen.jpg'

const Services = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <h2 className="text-5xl font-bold text-[#9F6A69] mb-4 font-serif p-6">Services</h2>
    </div>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={Responsive}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Responsive Web Development
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Building modern, mobile-first websites that look and perform
                  flawlessly across all devices. <br />{" "}
                  <strong>
                    Tech: HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS
                  </strong>
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={UI}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    UI/UX Implementation
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Translating UI/UX designs into clean, interactive front-end
                  interfaces with attention to detail and accessibility.
                  <br />{" "}
                  <strong>
                    Focus: Pixel-perfect design, responsiveness, cross-browser
                    compatibility
                  </strong>
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={Opt}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Website Optimization & Debugging
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Improving load times, fixing layout issues, and ensuring a
                  smooth user experience through clean, optimized code. <br />{" "}
                  <strong>
                    Tools: Chrome DevTools, Lighthouse, GitHub, ESLint
                  </strong>
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services
