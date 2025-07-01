import CoverPhoto from '../assets/202011_04.jpg';
const Cover = () => {
  return (
    <div className="container mx-auto flex items-center p-10">
      <div className="w-[100%]">
        <img src={CoverPhoto} className="w-[100%] rounded opacity-75 " />
      </div>
      <div className="w-[100%]">
        <p className="text-xl font-serif indent-10">
          Hi, I am <span className="text-[#684544]">Esraa Alnagar </span>a
          Front-End Developer passionate about building pixel-perfect,
          user-centric web experiences. I blend clean code with creative design,
          turning HTML, CSS, and JavaScript into smooth, responsive interfaces
          that don’t just look great but also they perform. 🚀 Always evolving, always
          learning.
        </p>
      </div>
    </div>
  );
}

export default Cover
