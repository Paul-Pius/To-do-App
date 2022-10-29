import axios from "axios";


const baseUrl = "http://localhost:3000";


const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log("data--->", data);
        setTodo(data);
    })
}

const addTodo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllTodo(setToDo);
    })
    .catch((err) => {console.log(err);})
}

const updateTodo = (ToDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: ToDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo);
    })
    .catch((err) => {console.log(err);})
}

const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        getAllTodo(setToDo);
    })
    .catch((err) => {console.log(err);})
}

export { getAllTodo, addTodo, updateTodo, deleteToDo };