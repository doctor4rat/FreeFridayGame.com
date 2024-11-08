import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                FreeFriday.Games
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/game1" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium">
                Least
              </Link>
              <Link href="https://github.com/doctor4rat/FreeFriday" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium">
                GitHub
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href='/Info'>
              <button 
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Info"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}