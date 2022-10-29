import { useState, useEffect } from "react";
import ToDo from "./components/ToDoComponent";
import { getAllTodo, addTodo, updateTodo, deleteToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [ToDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllTodo(setToDo);
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)} 
          />
          <div 
            className="add" 
            onClick={isUpdating ? 
            () => updateTodo(ToDoId, text, setToDo, setText, setIsUpdating) : 
            () => addTodo(text, setText, setToDo)}>
            {isUpdating ? "update" : "Add"}
          </div>
        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text} updateMode={() => 
          updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)} 
          />)}
        
        </div>
      </div>
    </div>
  );
}

export default App;
