import ArrowIcon from "./components/arrowIcon";
export default function Home() {
  return (
    <div className="font-montserrat bg-gradient-to-r from-white to-gray-100 min-h-screen relative bg-gray-300 overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="z-10 flex items-center space-x-4">
          <div className="bg-green-400 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
            N
          </div>
          <nav className="hidden sm:flex space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
            <a href="#privacy" className="hover:text-black">
              Privacy
            </a>
          </nav>
        </div>
        <button className="z-10 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center z-10">
        <div className="">
          <h1 className=" text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock Knowledge <br /> in Bite-Sized Packages
          </h1>
          <p className="text-lg text-gray-600 mb-8 w-[800px] font-32 mx-auto">
            FunNibble is the all-in-one app that transforms books, articles, and
            blogs into gamified, digestible learning sessions. Learn on your
            terms, and on your time.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800">
            <div className="flex flex-row items-center">
              <ArrowIcon />
              Start Free Trial
            </div>
          </button>
        </div>
        {/* Decorative Circles */}
      </section>
      <div className="absolute top-24 left-[-200px] lg:w-[35%] lg:h-3/4 w-[70%] h-1/3 bg-orange-400 rounded-full overflow-hidden"></div>
      <div className="absolute bottom-[-120px] left-24 lg:w-[35%] lg:h-3/4 w-[70%] h-1/3 bg-green-400 rounded-full overflow-hidden"></div>
      <div className="absolute top-[-180px] right-[-100px] lg:w-[35%] lg:h-3/4 w-[70%] h-1/3 bg-black rounded-full overflow-hidden"></div>
    </div>
  );
}
