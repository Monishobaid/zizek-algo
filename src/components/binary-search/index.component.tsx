import React, { useState } from "react";

function BinarySearch() {
  const [input, setInput] = useState<number>(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(99);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setInput(value);
    }
  };

  const handleGuess = () => {
    if (input === null || isNaN(input)) {
      alert("Please enter a valid number.");
      return;
    }

    const targetNumber = 4;
    console.log(targetNumber);
    const mid = Math.floor((low + high) / 2);

    if (input === targetNumber) {
      alert("You guessed right!");
    } else if (input < targetNumber) {
      setLow(mid - 1);
      alert("You guessed too low.");
    } else {
      setHigh(mid + 1);
      alert("You guessed too high.");
    }
  };

  return (
    <div className="mx-4">
      <div className="w-full flex items-center justify-center">
        <input
          className="p-2"
          placeholder="Choose a number"
          value={input}
          onChange={handleInputChange}
          type="text"
        />
        <button onClick={handleGuess}>Guess</button>
      </div>
      <p className="font-protest">{`Try searching between ${low + ' '+ high}`}</p>
    </div>
  );
}

export default BinarySearch;
