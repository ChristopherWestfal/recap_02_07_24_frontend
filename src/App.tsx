import './App.css'
import {useEffect, useState} from "react";
import {Todo} from "./types/Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import OpenPage from "./pages/OpenPage.tsx";
import Navigation from "./components/Navigation.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import InProgressPage from "./pages/InProgressPage.tsx";
import DonePage from "./pages/DonePage.tsx";

function App() {

    const[todos, setTodos] = useState<Todo[]>([])
    const[todo, setTodo] = useState<Todo>({id:"", description:"", status:""})

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

    function updateTodo(id:string | undefined, description:string, status:string){
        axios.put(`/api/todo/${id}`, {description:description, status:status})
            .then(getTodos)
            .catch(error => console.log(error))
    }

    function getById(id:string){
        axios.get(`/api/todo/${id}`)
            .then(response => setTodo(response.data))
            .catch(error => console.log(error))
    }

    function deleteById(id:string){
        axios.delete(`/api/todo/${id}`)
            .then(getTodos)
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
                <Route path={"/"} element={<OpenPage todos={todos} addTodo={addTodo} deleteById={deleteById}/>}/>
                <Route path={"/inprogress"} element={<InProgressPage todos={todos} addTodo={addTodo} deleteById={deleteById}/>}/>
                <Route path={"/done"} element={<DonePage todos={todos} addTodo={addTodo} deleteById={deleteById}/>}/>
                <Route path={"/:id"} element={<DetailPage todo={todo} updateTodo={updateTodo} getById={getById}/>}/>
            </Routes>
        </>
    )
}

export default App
