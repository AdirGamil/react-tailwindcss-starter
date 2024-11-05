export function MainIndex() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello from React + TailwindCSS Starter Kit
        </h1>
        <p className="text-gray-600 text-lg">
          Start building fast, responsive, and beautiful React apps with TailwindCSS.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          <span className="mr-2">🚀</span>
          <a href="https://github.com/AdirGamil/react-tailwindcss-starter">Get Started</a>
        </button>
      </div>
    </div>
  )
}
