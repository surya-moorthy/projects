
import { useState } from 'react';
import './App.css'
import  Block  from './components/blocks'

function App() {
  const [state,setState] = useState(Array(9).fill(null))
  const [currrentTurn,setcurrentTurn] = useState("x")

  const  checkWinner = (state : any[]) =>{
     const win = [
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
     ]
     for(let i=0;i<win.length;i++){
      const [a,b,c] = win[i];
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
         return true;
      }
     }
     return false;
  }
  const handleOnClick = (index : number) => {
    const stateCopy = Array.from(state)
    if(stateCopy[index] !== null) return ;
    
    stateCopy[index] = currrentTurn
    
    setState(stateCopy)

    const win = checkWinner(stateCopy );
  if(win){
    alert(`${currrentTurn} won the game`)
  }
    setcurrentTurn(currrentTurn === "x" ? "o" : "x")
   
  }
  console.log(state)
  return (
    <div className="board">
        <div className='row'>
             <Block onClick={()=>{handleOnClick(0)}} value={state[0]}/>
             <Block onClick={()=>{handleOnClick(1)}} value={state[1]}/>
             <Block onClick={()=>{handleOnClick(2)}} value={state[2]}/>
        </div>
        <div className='row'>
             <Block onClick={()=>{handleOnClick(3)}} value={state[3]}/>
             <Block onClick={()=>{handleOnClick(4)}} value={state[4]}/>
             <Block onClick={()=>{handleOnClick(5)}} value={state[5]}/>
        </div>
        <div className='row'>
             <Block onClick={()=>{handleOnClick(6)}} value={state[6]}/>
             <Block onClick={()=>{handleOnClick(7)}} value={state[7]}/>
             <Block onClick={()=>{handleOnClick(8)}} value={state[8]}/>
        </div>
    </div>
  )
}

export default App
