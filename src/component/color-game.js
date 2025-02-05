import { useEffect, useState } from "react";

const colors = ["yellow", "blue", "black", "tomato", "purple", "green"]

const ColorGame = () => {
 const [targetColor, setTargetColor] = useState();
 const [message, setMessage] = useState("");
 const [score, setscore] = useState(0);
 const [celebrate, setCelebrate] = useState(false)
 const [fadeOut, setFadeOut] = useState(false);
 

function startNewGame(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setMessage()
}


function handleColorButtons(color){
    if(color === targetColor){
        setMessage('correct!!');
        setCelebrate(true)
        setscore(score + 1);
        setTimeout(() => {
            startNewGame();
            setCelebrate(false)
        }, 500)
        }else{
        setMessage("wrong!, try again.");
        setFadeOut(true)
    }
}

useEffect(() => {
    startNewGame()
}, [])

    return ( 
        <>
           
            <div className='gameContainer'>
            <h1>Color Guessing Game</h1>
                <div className='colorBox' style={{backgroundColor:targetColor}} data-testid="colorBox">
                </div>
                <p data-testid="gameInstruction">Guess the correct color by clicking the button options below</p>
                
                <div className="colorButtons">
                    {colors.map((color) => (
                        <button key={color}  data-testid="colorOption"  className="colorOptions" style={{backgroundColor: targetColor}} onClick={() => handleColorButtons(color)}></button>
                    ))}
                </div>
                <p className={`message ${fadeOut ? 'fade-out' : ''} ${celebrate ? "celebrate" : ''}`} data-testid="gameStatus">{message}</p>
                <p className="score"  data-testid="score"> Score: {score}</p>

                <button className="gameButton" data-testid="newGameButton" onClick={() => setscore(0) || startNewGame()}> New Game </button>
            </div>
        </> 
     );
}
 
export default ColorGame;


