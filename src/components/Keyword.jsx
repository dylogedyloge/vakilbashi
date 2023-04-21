import React, { useState } from "react";

const WordCircle = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");

  const handleInputChange = (event) => {
    setCurrentWord(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && currentWord) {
      setWords([...words, currentWord]);
      setCurrentWord("");
    } else if (event.key === "Backspace" && !currentWord && words.length) {
      setWords(words.slice(0, words.length - 1));
    }
  };

  const handleWordClick = (word) => {
    setWords(words.filter((w) => w !== word));
  };

  return (
    <div className="max-w-sm w-full">
      {words.map((word, index) => (
        <div className="kbd kbd-sm p-2 m-1 " key={index}>
          <button
            className="btn btn-ghost btn-circle btn-xs"
            onClick={() => handleWordClick(word)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span className="mr-2">{word}</span>
        </div>
      ))}

      <input
        type="text"
        value={currentWord}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="کلیدواژه‌ها"
        className="input input-bordered w-full max-w-xs mt-10"
      />
    </div>
  );
};

export default WordCircle;
