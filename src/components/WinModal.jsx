import { useWindowSize } from "react-use";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const WinModal = ({ visible, winner, reset, changeCat, score }) => {
  console.log(score);

  const { width, height } = useWindowSize();
  useEffect(() => {
    const audio = new Audio("/win.mp3");
    audio.play().catch((e) => console.error("Audio playback failed:", e));
  }, []);
  return (
    <dialog id="winModal" className="modal modal-open flex justify-center">
      <Confetti width={width} height={height} />
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={visible}
      >
        ✕
      </button>
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-4 text-center relative overflow-hidden">
        <div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${
              winner === 2
                ? "from-[#fc4a1a] to-[#f7b733]"
                : "from-[#6366F1] to-[#EC4899]"
            }  inline-block text-transparent bg-clip-text`}
          >
            Player {winner} Wins!
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-Black mb-2">Score</h3>
            <div className="flex gap-1 justify-center items-center">
              <p className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-[#6366F1] to-[#EC4899]">
                {score[0]}
              </p>{" "}
              :{" "}
              <p className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-[#fc4a1a] to-[#f7b733]">
                {score[1]}
              </p>
            </div>
          </div>
          <p className="text-slate-600 mb-6">
            Congratulations! You've formed a line of 3 emojis.
          </p>
          <div className="flex flex-col justify-center items-center">
            <button
              className={`bg-gradient-to-r ${
                winner === 2
                  ? "from-[#fc4a1a] to-[#f7b733]"
                  : "from-[#6366F1] to-[#EC4899]"
              } text-white font-bold py-3 px-8 rounded-full text-lg cursor-pointer shadow-lg transform transition hover:scale-105`}
              onClick={() => {
                visible();
                reset();
              }}
            >
              Play Again
            </button>
            <p
              className="text-black inline py-3 px-8 text-xs select-none cursor-pointer transform transition hover:scale-102 hover:text-blue-600"
              onClick={() => {
                visible();
                changeCat();
              }}
            >
              Change Categories
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default WinModal;
