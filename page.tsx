import { Home, Search, Shield, DollarSign, Lock, Info, Settings, ChevronDown, ChevronRight } from "lucide-react"

export default function PrivacyCenter() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Meta logo */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {/* Updated Meta logo with proper infinity symbol styling */}
            <div className="flex items-center space-x-1">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-500">
                <path
                  fill="currentColor"
                  d="M17.5 12c0-2.5-2-4.5-4.5-4.5S8.5 9.5 8.5 12s2 4.5 4.5 4.5 4.5-2 4.5-4.5zm-9 0c0-2.5-2-4.5-4.5-4.5S0 9.5 0 12s2 4.5 4.5 4.5S8.5 14.5 8.5 12z"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Meta</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar - updated styling to match target */}
        <aside className="w-80 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h1
              className="text-2xl font-normal text-gray-900 mb-8"
              style={{ fontFamily: "Associate Sans, sans-serif" }}
            >
              Privacy Center
            </h1>

            <nav className="space-y-2">
              {/* Privacy Center home - active state with darker background */}
              <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex items-center space-x-3">
                <Home size={20} />
                <span className="font-medium">Privacy Center home</span>
              </div>

              {/* Search */}
              <div className="px-4 py-3 flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Search size={20} />
                <span>Search</span>
              </div>

              {/* Privacy topics */}
              <div className="px-4 py-3 flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Shield size={20} />
                <span>Privacy topics</span>
              </div>

              {/* More privacy resources */}
              <div className="px-4 py-3 flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <DollarSign size={20} />
                <span>More privacy resources</span>
              </div>

              {/* Privacy Policy */}
              <div className="px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Lock size={20} />
                  <span>Privacy Policy</span>
                </div>
                <ChevronDown size={16} />
              </div>

              {/* Other policies and articles */}
              <div className="px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Info size={20} />
                  <span>Other policies and articles</span>
                </div>
                <ChevronDown size={16} />
              </div>

              {/* Settings */}
              <div className="px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Settings size={20} />
                  <span>Settings</span>
                </div>
                <ChevronDown size={16} />
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Main heading - updated font styling */}
            <h1
              className="text-4xl font-normal text-gray-900 mb-4"
              style={{ fontFamily: "Associate Sans, sans-serif" }}
            >
              Privacy Center
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Make the privacy choices that are right for you. Learn how to manage and control your privacy on Facebook,
              Instagram, Messenger, and other Meta Products.
            </p>

            {/* We build privacy section */}
            <h2 className="text-xl font-normal text-gray-900 mb-6" style={{ fontFamily: "Associate Sans, sans-serif" }}>
              We build privacy into our products
            </h2>

            {/* Privacy cards row */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {/* Privacy Checkup card - improved icon */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                          <path
                            fill="currentColor"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-3.6 6-6 6zm1-9H7v2H5v2h2v2h2v-2h2V7H9V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-normal text-gray-900 mb-2"
                        style={{ fontFamily: "Associate Sans, sans-serif" }}
                      >
                        Privacy Checkup
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Tools like Privacy Checkup make it easy for you to take control of your privacy.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>

              {/* Private messaging card - improved icon */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative">
                        {/* Chat bubbles icon */}
                        <div className="flex space-x-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-normal text-gray-900 mb-2"
                        style={{ fontFamily: "Associate Sans, sans-serif" }}
                      >
                        Private messaging
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our messaging products offer end-to-end encryption so your conversations stay safe and secure.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Privacy topics section */}
            <div className="mb-12">
              <h2
                className="text-xl font-normal text-gray-900 mb-2"
                style={{ fontFamily: "Associate Sans, sans-serif" }}
              >
                Privacy topics
              </h2>

              <p className="text-gray-600 mb-6">
                Get answers to your privacy questions and manage your privacy in a way that's right for you.
              </p>

              {/* Privacy topics cards with enhanced illustrations */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Information card - enhanced illustration to match target */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  {/* Illustration area */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Person avatar - more detailed to match target */}
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                        <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                          {/* Simple face */}
                          <div className="flex flex-col items-center">
                            <div className="flex space-x-3 mb-2">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <div className="w-4 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {/* Interface elements - more detailed to match target */}
                      <div className="absolute top-6 left-6 w-20 h-10 bg-white rounded shadow-md opacity-90 border border-gray-100">
                        <div className="p-1.5">
                          <div className="w-full h-1 bg-gray-200 rounded mb-1.5"></div>
                          <div className="w-3/4 h-1 bg-gray-200 rounded mb-1.5"></div>
                          <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute top-8 right-6 w-16 h-8 bg-white rounded shadow-md opacity-90 border border-gray-100">
                        <div className="p-1.5">
                          <div className="w-full h-1 bg-blue-200 rounded mb-1.5"></div>
                          <div className="w-2/3 h-1 bg-blue-200 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-8 w-24 h-10 bg-white rounded shadow-md opacity-90 border border-gray-100">
                        <div className="p-1.5">
                          <div className="w-full h-1 bg-green-200 rounded mb-1.5"></div>
                          <div className="w-4/5 h-1 bg-green-200 rounded mb-1.5"></div>
                          <div className="w-3/5 h-1 bg-green-200 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-8 right-8 w-16 h-8 bg-white rounded shadow-md opacity-90 border border-gray-100">
                        <div className="p-1.5">
                          <div className="w-full h-1 bg-purple-200 rounded mb-1.5"></div>
                          <div className="w-2/3 h-1 bg-purple-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-1">Information</div>
                    <h3
                      className="text-lg font-normal text-gray-900 mb-2"
                      style={{ fontFamily: "Associate Sans, sans-serif" }}
                    >
                      Review and manage your information across your accounts
                    </h3>
                  </div>
                </div>

                {/* Generative AI card - enhanced illustration to match target */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  {/* Illustration area */}
                  <div className="h-48 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 relative overflow-hidden">
                    <div className="absolute inset-0">
                      {/* AI-related graphics - more detailed to match target */}
                      <div className="absolute top-4 left-4 w-16 h-12 bg-gray-800 rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                        <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-4 h-2 bg-green-400 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-12 h-12 bg-purple-600 rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-6 left-6 w-10 h-10 bg-red-500 rounded shadow-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-300 rounded"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 w-14 h-10 bg-blue-600 rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center">
                        <div className="w-8 h-4 bg-blue-400 rounded"></div>
                      </div>
                      {/* Document/interface elements - more detailed to match target */}
                      <div className="absolute top-10 left-1/3 w-20 h-16 bg-white rounded shadow-md opacity-95 border border-gray-100">
                        <div className="p-2">
                          <div className="w-full h-1 bg-gray-300 rounded mb-1.5"></div>
                          <div className="w-4/5 h-1 bg-gray-300 rounded mb-1.5"></div>
                          <div className="w-3/5 h-1 bg-gray-300 rounded mb-2"></div>
                          <div className="w-2/3 h-1 bg-blue-300 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-10 right-1/3 w-18 h-14 bg-white rounded shadow-md opacity-95 border border-gray-100">
                        <div className="p-2">
                          <div className="w-full h-1 bg-purple-300 rounded mb-1.5"></div>
                          <div className="w-3/4 h-1 bg-purple-300 rounded mb-2"></div>
                          <div className="w-1/2 h-1 bg-orange-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-1">Generative AI</div>
                    <h3
                      className="text-lg font-normal text-gray-900 mb-2"
                      style={{ fontFamily: "Associate Sans, sans-serif" }}
                    >
                      AI at Meta
                    </h3>
                  </div>
                </div>
              </div>

              {/* View all topics button */}
              <div className="flex justify-center">
                <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                  View all topics
                </button>
              </div>
            </div>

            {/* Learn about Meta's commitment to privacy section */}
            <div className="mb-12">
              <h2
                className="text-xl font-normal text-gray-900 mb-2"
                style={{ fontFamily: "Associate Sans, sans-serif" }}
              >
                Learn about Meta's commitment to privacy
              </h2>

              <p className="text-gray-600 mb-6">
                Find more resources you can use to learn about how Meta builds privacy into its products.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                    </div>
                    <span
                      className="text-lg font-normal text-gray-900"
                      style={{ fontFamily: "Associate Sans, sans-serif" }}
                    >
                      More privacy resources
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Learn more in the Privacy Policy section */}
            <div className="mb-12">
              <h2
                className="text-xl font-normal text-gray-900 mb-6"
                style={{ fontFamily: "Associate Sans, sans-serif" }}
              >
                Learn more in the Privacy Policy
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-normal text-gray-900 mb-1"
                        style={{ fontFamily: "Associate Sans, sans-serif" }}
                      >
                        What is the Privacy Policy and what does it cover?
                      </h3>
                      <p className="text-sm text-gray-500">Privacy Policy</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors mt-1" />
                </div>
              </div>
            </div>

            {/* Looking for more privacy settings section */}
            <div className="mb-12">
              <h2
                className="text-xl font-normal text-gray-900 mb-2"
                style={{ fontFamily: "Associate Sans, sans-serif" }}
              >
                Looking for more privacy settings?
              </h2>

              <p className="text-gray-600 mb-6">
                Quickly access your settings across Facebook and Messenger or Instagram
              </p>

              <div className="space-y-4">
                {/* Facebook link - improved icon to match target */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">f</span>
                      </div>
                      <span
                        className="text-lg font-normal text-gray-900"
                        style={{ fontFamily: "Associate Sans, sans-serif" }}
                      >
                        Facebook
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </div>

                {/* Instagram link - improved icon to match target */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-gray-800 rounded-full"></div>
                        </div>
                      </div>
                      <span
                        className="text-lg font-normal text-gray-900"
                        style={{ fontFamily: "Associate Sans, sans-serif" }}
                      >
                        Instagram
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
