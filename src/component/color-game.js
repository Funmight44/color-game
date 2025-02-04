import { useEffect, useState } from "react";

const colors = ["yellow", "blue", "black", "tomato", "purple", "green"]

const ColorGame = () => {
 const [targetColor, setTargetColor] = useState();
 const [message, setMessage] = useState("guess the correct color");
 const [score, setscore] = useState(0);

 const [fadeOut, setFadeOut] = useState(false);
 

function startNewGame(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setscore(0);
    setMessage('guess the correct color')
}


function handleColorButtons(color){
    if(color === targetColor){
        setMessage('correct!!');
        setFadeOut(false)
        setscore(score + 1);
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

                <div className="colorButtons">
                    {colors.map((color) => (
                        <button key={color}  data-testid="colorOption"  className="colorOptions" style={{backgroundColor: targetColor}} onClick={() => handleColorButtons(color)}></button>
                    ))}
                </div>

                <p className={`message ${fadeOut ? 'fade-out' : 'celebrate'}`} data-testid="gameStatus">{message}</p>

                <p className="score"  data-testid="score"> Score: {score}</p>

                <button className="gameButton" data-testid="newGameButton" onClick={startNewGame}> New Game </button>
            </div>
        </> 
     );
}
 
export default ColorGame;


