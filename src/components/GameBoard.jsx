import React, { useState } from "react";
import WinModal from "./WinModal";

const GameBoard = ({ player1Cat, player2Cat, reset,changeCat }) => {
  const [showGameRule, setShowGameRule] = useState(false);
  const [player1, setPlayer1] = useState(true);
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [showWin, setShowWin] = useState(false);
  const [winner, setWinner] = useState(1);
  const [winHighlight, setWinHighlight] = useState([]);

  function randomPlayer1Emoji() {
    return player1Cat.emojiList[
      Math.floor(Math.random() * player1Cat.emojiList.length)
    ];
  }

  function randomPlayer2Emoji() {
    return player2Cat.emojiList[
      Math.floor(Math.random() * player2Cat.emojiList.length)
    ];
  }

  function checkWinner(playerMoves, num) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const moveSet = new Set(playerMoves);
    const playerWin = winningCombos.some((combo) =>
      combo.every((pos) => moveSet.has(pos))
    );

    if (playerWin) {

      setWinHighlight(playerMoves);
      setWinner(num);
      setShowWin(true);
    }
  }

  function move(i) {
    if (player1Moves.includes(i) || player2Moves.includes(i)) {
      return;
    }

    if (player1) {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];

        if (player1Moves.length === 3) {
          newGrid[player1Moves[0]] = "";
          newGrid[i] = randomPlayer1Emoji();
          checkWinner([...player1Moves.slice(1), i], 1);
          setPlayer1Moves([...player1Moves.slice(1), i]);
          console.log(1,[...player1Moves.slice(1), i]);
          
        } else {
          newGrid[i] = randomPlayer1Emoji();
          checkWinner([...player1Moves, i], 1);
          setPlayer1Moves([...player1Moves, i]);
        }

        return newGrid;
      });

      setPlayer1(false);
    } else {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];

        if (player2Moves.length === 3) {
          newGrid[player2Moves[0]] = "";
          newGrid[i] = randomPlayer2Emoji();
          checkWinner([...player2Moves.slice(1), i], 2);
          setPlayer2Moves([...player2Moves.slice(1), i]);
          console.log(2,[...player2Moves.slice(1), i]);

        } else {
          newGrid[i] = randomPlayer2Emoji();
          checkWinner([...player2Moves, i], 2);
          setPlayer2Moves([...player2Moves, i]);
        }
        return newGrid;
      });

      setPlayer1(true);
    }
  }

  return (
    <div
      className={`${
        player1 ? "bg-blue-100" : "bg-red-100"
      } min-h-screen text-slate-800 flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center container mx-auto px-4 pt-8 pb-5 max-w-4xl">
        <div
          className={`w-sm flex gap-4 mb-6 rounded-xl p-4 text-center bg-white border-2 ${
            player1 ? "border-[#3B82F6]" : "border-[#f63b3b]"
          } justify-center items-center`}
        >
          <p
            className={`text-2xl font-medium  ${
              player1 ? "text-[#3B82F6]" : "text-[#f63b3b]"
            }`}
          >
            {player1 ? "Player 1's Turn" : "Player 2's Turn"}
          </p>
          <div className="mt-2 flex items-center">
            <span
              className={`text-sm  ${player1 ? "bg-blue-100" : "bg-red-100"} ${
                player1 ? "text-blue-800" : "text-red-800"
              } py-1 px-3 rounded-full mr-2`}
            >
              {player1 ? player1Cat.title : player2Cat.title}
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-6 mb-6 w-sm ">
          <div className="grid grid-cols-3 gap-4">
            {grid.map((val, ind) => {
              return (
                <button
                  key={ind}
                  onClick={() => {
                    move(ind);
                  }}
                  disabled={val!==""}
                  className={`disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-100 select-none aspect-square rounded-lg flex items-center justify-center text-5xl md:text-6xl cursor-pointer hover:bg-white transition-all border-2 border-slate-200 hover:scale-105 duration-200 ease-in-out ${
                    winHighlight.includes(ind) ? "bg-green-500" : "bg-slate-100"
                  }`}
                >
                  {val}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowGameRule(!showGameRule)}
            className="cursor-pointer select-none text-[#6366F1] hover:text-[#EC4899] font-semibold text-sm underline transition-colors duration-150"
          >
            {`${showGameRule?"Hide": "Show"} Game Rules`}
          </button>
        </div>
      </div>
      {showWin && (
        <WinModal winner={winner} visible={() => setShowWin(!showWin)} reset={reset} changeCat={changeCat} />
      )}
      {showGameRule && (
        <div className="mt-4 w-2xl bg-white rounded-xl shadow-md p-6 text-left mb-10">
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

export default GameBoard;
