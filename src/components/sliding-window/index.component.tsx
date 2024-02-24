import { useState} from 'react';

interface Result {
  found: boolean;
  subarray: number[];
}

function SlidingWindow() {
  const [nums, setNums] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<Result>({ found: false, subarray: [] });

  const generateRandomArray = () => {
    const randomLength = Math.floor(Math.random() * 10) + 5; // Random array length between 5 and 15
    const randomArray = Array.from({ length: randomLength }, () => Math.floor(Math.random() * 20) + 1);
    console.log("Generated random array:", randomArray); // Random numbers between 1 and 20
    setNums(randomArray);
  };

  const generateRandomTarget = () => {
    setTarget(Math.floor(Math.random() * 50) + 10); // Random target between 10 and 60
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumbers = e.target.value.split(',').map(num => parseInt(num.trim()));
    if (inputNumbers.every(num => !isNaN(num))) {
      setNums(inputNumbers);
    }
  };
  

  const handlePlay = () => {
    generateRandomArray();
    generateRandomTarget();
    setResult({ found: false, subarray: [] });
  };

  const findSubarrayWithTarget = () => {
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
      windowSum += nums[right];

      while (windowSum > target) {
        windowSum -= nums[left];
        left++;
      }

      if (windowSum === target) {
        setResult({ found: true, subarray: nums.slice(left, right + 1) });
        return;
      }
    }

    setResult({ found: false, subarray: [] });
  };

  return (
    <div>
      <h2>Sliding Window</h2>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={generateRandomArray}>Generate Random Array</button>
        <button onClick={generateRandomTarget}>Generate Random Target</button>
      </div>
      <div>
        <label htmlFor="nums">Enter numbers (comma-separated):</label>
        <input type="text" id="nums" value={nums.join(',')} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="target">Target sum:</label>
        <input type="number" id="target" value={target} readOnly />
      </div>
      <div>
        <button onClick={findSubarrayWithTarget}>Find Subarray with Target</button>
      </div>
      <p>Randomly generated array: [{nums.join(', ')}]</p>
      {result.found ? (
        <p>You win! Subarray with sum {target}: [{result.subarray.join(', ')}]</p>
      ) : (
        <p>No subarray found with sum {target}.</p>
      )}
    </div>
  );
}

export default SlidingWindow;


