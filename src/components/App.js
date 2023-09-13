import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [skill, setSkill] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // check the input length and add the skill to the list
  const handleAddSkill = () => {
    if (newSkill.length > 5) {
      setSkill([...skill, newSkill]);
      setNewSkill("");
    } else {
      alert("Please enter more than 5 characters.");
    }
  };

  return (
    <div id="main">
      <h2>React.useMemo</h2>
      <h3>My todos</h3>
      <p>{todos}</p>
      <button id="add-todo-btn" onClick={() => setTodos("New Todo")}>
        Add Todo
      </button>
      <hr></hr>
      <span>Count: {count}</span>
      <button id="incr-cnt" onClick={() => setCount(count + 1)}>
        +
      </button>
      <h3>Expensive Calculation</h3>
      <p>1000000000</p>
      <hr></hr>
      <hr></hr>
      <h3>React.memo</h3>
      <input
        type="text"
        id="skill-input"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {skill.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
