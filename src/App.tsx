import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1280px] mx-auto p-8 text-center">
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

      <div className="p-8 bg-white/5 rounded-2xl shadow-md inline-block">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 mb-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-red-600 mt-6">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App