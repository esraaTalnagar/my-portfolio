import CoverPhoto from '../assets/202011_04.jpg';
const Cover = () => {
  return (
    <div className="container mx-auto flex items-center p-10">
      <div className="w-[80%]">
        <img src={CoverPhoto} className="w-[100%] rounded opacity-75 " />
      </div>
      <div className="w-[100%] flex flex-col">
        <p className="text-xl font-serif indent-10">
          Hi, I am <span className="text-[#684544]">Esraa Alnagar </span>a
          Front-End Developer passionate about building pixel-perfect,
          user-centric web experiences. I blend clean code with creative design,
          turning HTML, CSS, and JavaScript into smooth, responsive interfaces
          that don’t just look great but also they perform. 🚀 Always evolving,
          always learning.
        </p>
        <button className="w-[25%] bg-[#9F6A69] hover:bg-[#684544] text-white font-bold py-2 px-4 rounded flex items-center self-center justify-self-end mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20px"
            height="20px"
            className="mr-2"
            fill="currentColor"
          >
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <a href="/Esraa_CV.pdf" download="Esraa_Alnagar_CV.pdf">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default Cover
