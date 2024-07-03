import './App.css'
import {useEffect, useState} from "react";
import {Todo} from "./types/Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import ViewPage from "./pages/ViewPage.tsx";
import Navigation from "./components/Navigation.tsx";
import DetailPage from "./pages/DetailPage.tsx";

function App() {

    const[todos, setTodos] = useState<Todo[]>([])
    const[todo, setTodo] = useState<Todo>()

    function getTodos(){
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    function addTodo(description:string){
        axios.post("/api/todo", {description:description, status:"OPEN"})
            .then(getTodos)
            .catch(error => console.log(error))
    }

    function updateTodo(id:string, description:string, status:string){
        axios.put("api/todo/${id}", {id:id, description:description, status:status})
            .catch(error => console.log(error))
    }

    useEffect(() => {
        document.title = "Todo App"
        getTodos()
    }, [])

    return(
        <>
            <header>
                <Navigation/>
            </header>
            <Routes>
                <Route path={"/"} element={<ViewPage todos={todos} addTodo={addTodo}/>}/>
                <Route path={"/detail"} element={<DetailPage todo={todo} upodateTodo={{updateTodo}}/>}/>
            </Routes>
        </>
    )
}

export default App
