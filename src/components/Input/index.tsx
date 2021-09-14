import React, { useState } from "react";
import { usePeopleStore } from "store";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { addPerson } = usePeopleStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-stretch">
      <input
        type="text"
        placeholder="Person Name"
        value={inputValue}
        onChange={onChange}
        className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-transparent text-white flex-1 border border-gray-800 ring-offset-2 ring-offset-gray-700"
      />
      <button
        onClick={() => addPerson(inputValue)}
        className="bg-indigo-600 rounded-lg flex place-items-center text-white ml-4 px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
