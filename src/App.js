import React, { useState } from "react";
import Hangman from "./Components/Hangman";
import Help from "./Components/Help";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <input
        className="helpButton"
        type="button"
        value="Click for help"
        onClick={togglePopup}
      />

      {isOpen && (
        <Help
          content={
            <>
              <h3>Rules on how the game works:</h3>
              <p>
                Hangman is a classic word game in which you must guess the
                secret word one letter at a time.
                <br />
                Guess one letter at a time to reveal the secret word.
                <br />
                Each incorrect guess adds another part to the hangman. You only
                get 7 incorrect guesses.
                <br />
                Enter the correct letters (on your keyboard) to win the game!
              </p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <div>
        <Hangman />
      </div>
    </>
  );
}

export default App;
