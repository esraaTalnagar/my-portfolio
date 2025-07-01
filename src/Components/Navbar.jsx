import Logo from '../assets/my-logo.png'
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
<div className="bg-gray-100 w-full mb-4 font-serif">
	<div className="bg-white shadow">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div>
          <img src={Logo} className="size-12"/>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <a href="#about-me" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-10">About Me</a>
          <a href="#education" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-10">Education</a>
          <a href="#experience" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-10">Experience</a>
          <a href="#projects" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-10">Projects</a>
          <a href="#services" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69]">Services</a>
        </div>
        <div className="sm:hidden cursor-pointer">
          <img src={Logo} className="size-12"/>
        </div>
      </div>
      <div className="block sm:hidden bg-white border-t-2 py-2">
        <div className="flex flex-col">
        <a href="#" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-4">About Me</a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-4">Education</a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-4">Experience</a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] mr-4">Projects</a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69]">Services</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
