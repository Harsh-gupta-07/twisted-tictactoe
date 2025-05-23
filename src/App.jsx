import { useContext, useRef, useState,useEffect } from "react";
import "./App.css";
import { GameContext } from "./context/GameContext";
import GameBoard from "./components/GameBoard";
import CategorySelection from "./components/CategorySelection";

function App() {
  const { categories, addCategory } = useContext(GameContext);
  
  const [showCategoryScreen, setShowCategoryScreen] = useState(true);
  const player1Cat = useRef([]);
  const player2Cat = useRef([]);
  const [resetCount, setResetCount] = useState(0);
  const [score, setScore] = useState([0,0])

  function setEmoList(first, sec) {
    player1Cat.current = categories[first];
    player2Cat.current = categories[sec];
    setShowCategoryScreen(false);
  }

  function changeScore(player){
    setScore((prev)=>{
      let sc = prev
      sc[player] +=1
      return sc 
    })
  }

  useEffect(() => {
  }, [resetCount]);

  function reset() {
    setResetCount((prev) => prev + 1);
  }

  function changeCat(){  
    setScore([0,0])
    setShowCategoryScreen(true)
  }

  return (
    <>
      {showCategoryScreen ? (
        <CategorySelection
          categories={categories}
          addCategories={addCategory}
          setEmoList={setEmoList}
        />
      ) : (
        <GameBoard
          key={resetCount}
          player1Cat={player1Cat.current}
          player2Cat={player2Cat.current}
          reset={reset}
          changeCat={changeCat}
          score={score}
          incScore={changeScore}
        />
      )}
    </>
  );
}

export default App;
