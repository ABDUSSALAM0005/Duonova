"use client"
import { Link, useNavigate } from "react-router-dom"
import { Home, ArrowLeft, Search, Sparkles } from "lucide-react"

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff99]/5 dark:bg-[#00ff99]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00ff99]/5 dark:bg-[#00ff99]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#00ff99] to-[#00ff99] bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#00ff99]/20 to-[#00ff99]/20 rounded-full opacity-70 animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#00ff99]/20 to-[#00ff99]/20 rounded-full opacity-70 animate-bounce delay-500" />
          <Sparkles className="absolute top-0 right-8 w-6 h-6 text-[#00ff99] animate-pulse delay-300" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white/90 dark:text-white">Oops! Page Not Found</h1>

        {/* Description */}
        <p className="text-lg text-accent dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off into the digital wilderness. Let's get you back on
          track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 border-2 border-white text-accent cursor-pointer hover:text-white hover:border-accent dark:border-[#A51C30] dark:text-[#A51C30] dark:hover:bg-[#A51C30] dark:hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>

          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff99] to-[#00356B] hover:from-[#00356B] hover:to-[#00ff99] cursor-p text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </button>
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-accent dark:border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-accent mr-2" />
            <h3 className="text-lg font-semibold text-accent dark:text-white">Looking for something specific?</h3>
          </div>
          <p className="text-white/90 dark:text-gray-400 mb-4 border-accent">
            Try searching for what you need or explore our main sections:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[ "Work", "Resume", "Contact", "Services" ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="px-4 py-2 text-accent border-1 border-accent  bg-transparent dark:bg-gray-700  dark:text-gray-300 rounded-lg hover:bg-accent hover:text-primary dark:hover:bg-[#A51C30] transition-all duration-300 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative SVG */}
        {/* <div className="mt-16 relative">
          <svg
            className="w-full max-w-lg mx-auto text-[#00356B]/20 dark:text-[#A51C30]/20"
            viewBox="0 0 1120 699"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M560 699C869.199 699 1120 542.5 1120 350C1120 157.5 869.199 1 560 1C250.801 1 0 157.5 0 350C0 542.5 250.801 699 560 699Z"
              fill="currentColor"
            />
            <path
              d="M560 579C763.803 579 930 465.803 930 326C930 186.197 763.803 73 560 73C356.197 73 190 186.197 190 326C190 465.803 356.197 579 560 579Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeDasharray="12 12"
              className="animate-pulse"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00356B] to-[#A51C30] rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ErrorPage
