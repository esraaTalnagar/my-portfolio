import CoverPhoto from '../assets/202011_04.jpg';
const Cover = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center p-10">
      <div className="w-[80%] md:w-1/2">
        <img src={CoverPhoto} className="w-[100%] rounded opacity-75 " />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <p className="text-base md:text-xl font-serif indent-6 md:indent-10 leading-relaxed text-center md:text-left">
          Hi, I am{" "}
          <span className="text-[#684544] font-semibold">Esraa Alnagar </span>a
          Front-End Developer passionate about building pixel-perfect,
          user-centric web experiences. I blend clean code with creative design,
          turning HTML, CSS, and JavaScript into smooth, responsive interfaces
          that don’t just look great but also they perform. 🚀 Always evolving,
          always learning.
        </p>
        <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
          <a
            href="/Esraa_CV.pdf"
            download="Esraa_Alnagar_CV.pdf"
            className="flex items-center justify-center gap-2 bg-[#9F6A69] hover:bg-[#684544] text-white font-semibold py-2 px-4 rounded-md text-sm sm:text-base w-[75%] sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cover
