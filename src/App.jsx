import { useState } from 'react'
import Box from './components/Box'
import paperImg from './assets/paper.jpg'
import rockImg from './assets/rock.jpg'
import scissorImg from './assets/scissor.jpg'
import questionImg from './assets/question.jpg'

function App() {
  const [choice, setChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleClick = (buttonName) => {
    setChoice(buttonName);
    setComputerChoice(getRandomChoice());
  };

  const handleReset = () => {
    setChoice(null);
    setComputerChoice(null);
  }

  const getImageForChoice = (choice) => {
    switch (choice) {
      case 'rock':
        return rockImg;
      case 'paper':
        return paperImg;
      case 'scissor':
        return scissorImg;
      default:
        return questionImg;
    }
  };

  const getRandomChoice = () => {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineResult = (userChoice, computerChoice) => {
  if (userChoice === null || computerChoice === null) return "";
  if (userChoice === computerChoice) return "tie";
  
  const winningCombos = [
    ["rock", "scissor"],
    ["scissor", "paper"],
    ["paper", "rock"]
  ];

    return winningCombos.some(([win, lose]) => userChoice === win && computerChoice === lose)
      ? "win" : "lose";
  };

  return (
    <div>
      <h1 className="game-title">🎮 Rock Paper Scissors 🎮</h1>
      <div className="box-container">
        <Box 
          title="You" 
          image={choice === null ? questionImg : getImageForChoice(choice)} 
          result={determineResult(choice, computerChoice)}
        />
        <Box 
          title="Computer" 
          image={computerChoice === null ? questionImg : getImageForChoice(computerChoice)} 
          result={determineResult(computerChoice, choice)}
        />
      </div>
      <div className="buttons">
        <button className="icon" onClick={() => handleClick("rock")}>🪨</button>
        <button className="icon" onClick={() => handleClick("paper")}>📄</button>
        <button className="icon" onClick={() => handleClick("scissor")}>✂️</button>
      </div>
      <div className="infos">
        <div className="info-item">🪨 = Rock</div>
        <div className="info-item">📄 = Paper</div>
        <div className="info-item">✂️ = Scissors</div>
      </div>
      <button className="reset-button" onClick={handleReset}>RESET</button>
    </div>
  )
}

export default App
