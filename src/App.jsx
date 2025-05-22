import { useRef, useState } from "react";
import "./App.css";
import CategorySelection from "./components/CategorySelection";

function App() {
  const [showGameRule, setShowGameRule] = useState(false)
  const [player1, setPlayer1] = useState(true)
  return (
    <>
      <div className={`${player1?"bg-blue-100":"bg-red-100"} min-h-screen text-slate-800 flex flex-col justify-center items-center`}>
        <div className="flex flex-col justify-center items-center container mx-auto px-4 pt-8 pb-5 max-w-4xl">
          <div className={`w-sm flex gap-4 mb-6 rounded-xl p-4 text-center bg-white border-2 ${player1?"border-[#3B82F6]":"border-[#f63b3b]"} justify-center items-center`}>
            <p className={`text-2xl font-medium  ${player1?"text-[#3B82F6]":"text-[#f63b3b]"}`}>
            {player1?"Player 1's Turn":"Player 2's Turn"}
            </p>
            <div className="mt-2 flex items-center">
              <span className={`text-sm  ${player1?"bg-blue-100":"bg-red-100"} ${player1?"text-blue-800":"text-red-800"} py-1 px-3 rounded-full mr-2`}>
                Animals
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-6 mb-6 w-sm ">
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
              <div className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out"></div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={()=>setShowGameRule(!showGameRule)} className="cursor-pointer select-none text-[#6366F1] hover:text-[#EC4899] font-semibold text-sm underline transition-colors duration-150">
              Show Game Rules
            </button>
          </div>
        </div>
        {showGameRule && <div className="mt-4 w-2xl bg-white rounded-xl shadow-md p-6 text-left mb-10">
          <h3 className="text-xl font-bold mb-3">Game Rules</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start">
              <span className="text-[#6366F1] mr-2">•</span>
              <span>Play on a 3x3 grid with your category of emojis</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6366F1] mr-2">•</span>
              <span>
                Each player can have a maximum of 3 emojis on the board
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6366F1] mr-2">•</span>
              <span>
                When placing a 4th emoji, your oldest emoji vanishes (FIFO)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6366F1] mr-2">•</span>
              <span>
                You cannot place your 4th emoji where your 1st emoji was
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6366F1] mr-2">•</span>
              <span>
                Win by forming a line of 3 of your emojis (horizontal, vertical,
                or diagonal)
              </span>
            </li>
          </ul>
        </div>}
      </div>
    </>
  );
}

export default App;
