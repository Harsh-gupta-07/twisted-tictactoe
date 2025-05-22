import { useState } from "react";
import "./App.css";

const CreateCustomCategory = ({ visible, handle }) => {
  return (
    <dialog
      id="customCategory"
      className="modal modal-open"
      onClick={visible}
    >
      <div
        className="modal-box bg-white max-w-md w-full sm:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={visible}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Add Custom Category</h3>

        <div className="modal-action">
          <button className="btn" onClick={visible}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handle}>
            Create Category
          </button>
        </div>
      </div>
    </dialog>
  );
};

function App() {
  const [categories, setCategories] = useState([
    { title: "Animals", emojiList: ["🐶", "🐱", "🐰", "🐐"] },
    { title: "Food", emojiList: ["🍕", "🍔", "🍩", "🍟"] },
    { title: "Sports", emojiList: ["🏈", "⚽️", "🎾", "🏀"] },
    { title: "Tarvel", emojiList: ["✈️", "🚗", "🚢", "🏝️"] },
  ]);
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="bg-slate-100 min-h-screen text-slate-800">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366F1] to-[#EC4899] inline-block text-transparent bg-clip-text">
              Twisted Tic Tac Toe
            </h1>
            <p className="text-slate-600 mt-2">
              A twisted version of TicTacToe with vanishing emojis!
            </p>
          </header>
          <div>
            <div className="animate-fadeIn">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  Choose Your Emoji Categories
                </h2>
                <p className="text-slate-600">
                  Each player selects one category of emojis to play with
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-[#3B82F6]">
                  <h3 className="text-xl font-bold text-[#3B82F6] mb-4">
                    Player 1
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((val) => {
                      return (
                        <button className="cursor-pointer category-card bg-blue-50 hover:bg-blue-100 border-transparent hover:border-[#3B82F6] rounded-lg p-4 flex flex-col items-center justify-center border-2 transition-all">
                          <span className="text-lg font-semibold mb-2">
                            {val.title}
                          </span>
                          <div className="flex gap-1 text-2xl">
                            {val.emojiList.map((emoji) => {
                              return <span>{emoji}</span>;
                            })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 py-2 px-4 bg-blue-100 rounded-lg text-center">
                    <p className="font-medium text-[#3B82F6]">
                      Select a category...
                    </p>
                  </div>
                  <div className="mt-4">
                    <button onClick={()=>setShowModal(!showModal)} className="text-[#3B82F6] cursor-pointer text-sm font-medium underline">
                      Create your own emoji set!
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-[#F97316]">
                  <h3 className="text-xl font-bold text-[#F97316] mb-4">
                    Player 2
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((val) => {
                      return (
                        <button className="cursor-pointer category-card bg-blue-50 hover:bg-blue-100 border-transparent hover:border-[#3B82F6] rounded-lg p-4 flex flex-col items-center justify-center border-2 transition-all">
                          <span className="text-lg font-semibold mb-2">
                            {val.title}
                          </span>
                          <div className="flex gap-1 text-2xl">
                            {val.emojiList.map((emoji) => {
                              return <span>{emoji}</span>;
                            })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 py-2 px-4 bg-orange-100 rounded-lg text-center">
                    <p className="font-medium text-[#F97316]">
                      Select a category...
                    </p>
                  </div>
                  <div className="mt-4">
                    <button onClick={()=>setShowModal(!showModal)} className="text-[#F97316] cursor-pointer text-sm font-medium underline">
                      Create your own emoji set!
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  disabled=""
                  className="bg-[#6366F1] cursor-pointer hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start Game
                </button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="cursor-pointer text-[#6366F1] hover:text-[#EC4899] font-medium text-sm underline">
                Show Game Rules
              </button>
            </div>
          </div>
        </div>
        {showModal && <CreateCustomCategory visible={()=>setShowModal(!showModal)}/>}
      </div>
    </>
  );
}

export default App;
