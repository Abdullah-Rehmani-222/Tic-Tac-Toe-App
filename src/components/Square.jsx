function Square({value, onSquareClick}) {
  return <button className="text-5xl rounded-lg m-2 float-start text-white font-bold  bg-blue-950 w-25 h-25" onClick={onSquareClick}>{value}</button>;
}

export default Square;
