import React from "react";
import CreateCustomCategory from "./CreateCustomCategory";
import { useRef, useState } from "react";

const CategorySelection = ({ categories, addCategories, setEmoList }) => {
  function addCategory(item) {
    addCategories(item);
  }
  const [showGameRule, setShowGameRule] = useState(true);
  const [player1Choice, setPlayer1Choice] = useState(-1);
  const [player2Choice, setPlayer2Choice] = useState(-1);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 flex flex-col justify-center items-center">
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
                  {categories.map((val, ind) => {
                    return (
                      <button
                        onClick={() => setPlayer1Choice(ind)}
                        disabled={ind === player2Choice}
                        key={ind}
                        className={`category-card cursor-pointer p-4 flex flex-col items-center justify-center rounded-lg transition-all border-2 ${
                          player1Choice === ind
                            ? "bg-blue-100 border-[#3B82F6]"
                            : "bg-blue-50 border-transparent"
                        } hover:bg-blue-100 hover:border-[#3B82F6] disabled:opacity-20 disabled:hover:bg-blue-50 disabled:hover:border-transparent disabled:cursor-not-allowed`}
                      >
                        <span className="text-lg font-semibold mb-2">
                          {val.title}
                        </span>
                        <div className="flex flex-wrap gap-1 text-2xl">
                          {val.emojiList.map((emoji, idx) => (
                            <span key={idx}>{emoji}</span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 py-2 px-4 bg-blue-100 rounded-lg text-center">
                  <p className="font-medium text-[#3B82F6] select-none">
                    {`Selected: ${
                      player1Choice === -1
                        ? "None"
                        : categories[player1Choice].title
                    }`}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setShowModal(!showModal)}
                    className="text-[#3B82F6] cursor-pointer text-sm font-medium underline select-none"
                  >
                    Create your own emoji set!
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-[#F97316]">
                <h3 className="text-xl font-bold text-[#F97316] mb-4">
                  Player 2
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((val, ind) => {
                    return (
                      <button
                        onClick={() => setPlayer2Choice(ind)}
                        disabled={ind === player1Choice}
                        key={ind}
                        className={`category-card cursor-pointer p-4 flex flex-col items-center justify-center rounded-lg transition-all border-2 ${
                          player2Choice === ind
                            ? "bg-red-100 border-[#f63b3b]"
                            : "bg-red-50 border-transparent"
                        } hover:bg-red-100 hover:border-[#f63b3b] disabled:opacity-20 disabled:hover:bg-red-50 disabled:hover:border-transparent disabled:cursor-not-allowed`}
                      >
                        <span className="text-lg font-semibold mb-2">
                          {val.title}
                        </span>
                        <div className="flex flex-wrap gap-1 text-2xl">
                          {val.emojiList.map((emoji, idx) => (
                            <span key={idx}>{emoji}</span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 py-2 px-4 bg-orange-100 rounded-lg text-center">
                  <p className="font-medium text-[#F97316] select-none">
                    {`Selected: ${
                      player2Choice === -1
                        ? "None"
                        : categories[player2Choice].title
                    }`}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setShowModal(!showModal)}
                    className="text-[#F97316] cursor-pointer text-sm font-medium underline select-none"
                  >
                    Create your own emoji set!
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                disabled={player1Choice === -1 || player2Choice === -1}
                onClick={() => setEmoList(player1Choice, player2Choice)}
                className="bg-[#6366F1] cursor-pointer hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Game
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button onClick={()=>setShowGameRule(!showGameRule)} className="cursor-pointer text-[#6366F1] hover:text-[#EC4899] font-medium text-sm underline">
              {`${showGameRule?"Hide": "Show"} Game Rules`}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <CreateCustomCategory
          visible={() => setShowModal(!showModal)}
          catList={categories.map((val) => val.title)}
          initAddCat={(e) => {
            addCategory(e);
          }}
        />
      )}
      {showGameRule && (
        <div className=" w-2xl bg-white rounded-xl shadow-md p-6 text-left mb-10">
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
                Win by forming a line of 3 of your emojis (horizontal, vertical,
                or diagonal)
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySelection;
