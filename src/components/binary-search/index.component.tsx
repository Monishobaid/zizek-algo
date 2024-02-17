import React, { useState } from "react";
import Bubble from "../common/speech-bubble/bubble.component";
import icon from "../../assets/conversation.svg";

function BinarySearchComponent() {
  const [input, setInput] = useState<number | null>(null);
  const [low, setLow] = useState<number>(1);
  const [high, setHigh] = useState<number>(100);
  const [bubbleTextOne, setBubbleTextOne] = useState<string>(
    "Choose a number between 1 to 100"
  );
  const [bubbleTextTwo, setBubbleTextTwo] = useState<string>('');

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

    setBubbleTextTwo(`I choose ${input}`);

    const targetNumber = 4;
    console.log(targetNumber);
    const mid = Math.floor((low + high) / 2);

    // added setTimeout to show some delay need to use animation here to show bubble transition
    setTimeout(() => {
      if (input === targetNumber) {
        setLow(0);
        setHigh(99);
        setBubbleTextOne("You guessed right!");
      } else if (input < targetNumber) {
        setLow(mid - 1);
        setBubbleTextOne("You guessed too low.");
      } else {
        setHigh(mid + 1);
        setBubbleTextOne("You guessed too high.");
      }
    }, 500)

    
    setInput(null);
  };

  return (
    <div className="mx-4 my-6">
      <div className="w-full flex items-center justify-center gap-x-4">
        <p className="font-protest absolute right-2 top-4">{`Try searching between ${
          low + "-" + high
        }`}</p>
        <input
          className="border rounded-md py-2 px-4 focus:outline-none text-sm"
          placeholder="Choose a number"
          value={input ?? ""}
          onChange={handleInputChange}
          type="text"
        />
        <button
          onClick={handleGuess}
          className="w-24 p-2 bg-emerald-400 text-white rounded-md"
        >
          Guess
        </button>
      </div>
      <div className="w-full h-screen flex flex-col mt-8 items-center relative">
        <div className="flex">
          <div className="">
            <Bubble
              text={bubbleTextOne}
              class1="circle1 left"
              class2="circle2 left"
            />
          </div>
          <div className="">
            <Bubble text={bubbleTextTwo} />
          </div>
        </div>
        <img alt="" src={icon} width={512} height={512} />
      </div>
    </div>
  );
}

export default BinarySearchComponent;
