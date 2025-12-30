import { useState } from "react"
import "./app.css"
import Board from "./components/Board"
import GameMenu from "./components/GameMenu"
function App() {
  const [gameStarted, setGameStarted] = useState(false)
  return (
    <div>
      {
        !gameStarted ? (
          <GameMenu onhandleClick={() => setGameStarted(true)} />
        ) : (
            <Board/>
        )
      }
    </div>
  )
}

export default App
