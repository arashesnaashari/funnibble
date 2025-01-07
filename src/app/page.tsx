import FormComponent from "./components/Form";
export default function Home() {
  return (
    <div className="2xl:w-4/5 mx-auto font-montserrat bg-gradient-to-r from-white to-gray-100 min-h-screen relative bg-gray-300 overflow-hidden">
      {/* Header */}
      <header className=" 2xl:w-4/5 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="z-10 flex items-center space-x-4">
          <div className="bg-green-400 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
            <img src="/logo.png" className="rounded-lg" />
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
        {/* <button className="z-10 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Login
        </button> */}
      </header>

      {/* Hero Section */}
      <section className="lg:w-3/4 2xl:w-4/5 relative container mx-auto px-4 py-20 text-center z-10">
        <div className="">
          <h1 className=" text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Transform Spare Moments <br /> into Growth Opportunities
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-32 mx-auto">
            Funnibble is an AI-powered microlearning app that turns books,
            topics, and documents into short, fun, and effective lessons—perfect
            for your busy life.
          </p>
          {/* <button className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800">
            <div className="flex flex-row items-center">
              <ArrowIcon />
              Start Free Trial
            </div>
          </button> */}
          <FormComponent />
        </div>
        {/* Decorative Circles */}
      </section>

      <div className="absolute bottom-0 right-0 lg:-right-16 lg:-bottom-52 bg-black rounded-full overflow-hidden animate-move-slow  w-[200px] h-[200px]  md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px]"></div>
      <div className="absolute left-0 inset-y-0 bg-orange-400 rounded-full overflow-hidden animate-rotate-slow  w-[200px] h-[200px]  md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px]"></div>

      <div className="absolute top-0 right-0 bg-green-400 rounded-full overflow-hidden animate-bounce-slow  w-[200px] h-[200px]  md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px]"></div>
    </div>
  );
}
