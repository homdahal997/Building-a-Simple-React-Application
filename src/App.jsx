import { useState } from "react";
import { useImmer } from "use-immer";
// import { useImmer } from "use-immer";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    <p>Jane</p>,
    <p>John</p>,
    "Patrick",
    "Patrick",
  ]);

  const handleOnClick = () => {
    // Add to an array
    // setPeople('bob', ...people, 'beth')

    // Removing from an array
    // setPeople(people.filter((i) => i !== "Patrick"));

    const nextArr = [
      // Items in the original array before the insertion point:
      ...people.slice(0, 1),
      // The new item being added:
      "newItem",
      // Items in the original array after the insertion point:
      ...people.slice(1),
    ];

    // Return a new array.
    setPeople(nextArr);
  };
  // console.log(people);
  return (
    <>
      <div className="people" onClick={handleOnClick}>
        <div>{people}</div>
      </div>
    </>
  );
}

export default App;