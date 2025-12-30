
function GameMenu({onhandleClick}) {
  return (
    <div className="text-center">
          <h1 className='text-3xl text-blue-300'>WELCOME TO TIC TAC TOE</h1>
          <button className="rounded-lg mt-5 cursor-pointer text-white bg-gray-800 p-3" onClick={onhandleClick}>START GAME</button>
    </div>
  )
}

export default GameMenu
