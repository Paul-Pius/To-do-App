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
}

export { getAllTodo, addTodo };