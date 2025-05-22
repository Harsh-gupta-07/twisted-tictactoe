import { useWindowSize } from "react-use";
import React from "react";
import Confetti from "react-confetti";

const WinModal = ({ visible }) => {
  const { width, height } = useWindowSize();
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
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] inline-block text-transparent bg-clip-text">
            Player 1 Wins!
          </h2>
          <p className="text-slate-600 mb-6">
            Congratulations! You've formed a line of 3 emojis.
          </p>
          <button
            className="bg-[#6366F1] hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
            onClick={visible}
          >
            Play Again
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default WinModal;
