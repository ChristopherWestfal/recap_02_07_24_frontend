import {Todo} from "../types/Todo.ts";
import {FormEvent, useState} from "react";
import TodoCard from "../components/TodoCard.tsx";

type OpenPageProps = {
    todos:Todo[];
    addTodo: (description:string) => void
    deleteById: (id:string) => void
    updateTodo: (id:string | undefined, description:string, status:string) => void
}

export default function OpenPage(props:Readonly<OpenPageProps>){

    const openTodos = props.todos.filter(todo => todo.status === "OPEN");
    const[description, setDescription] = useState("");

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        props.addTodo(description);
        setDescription("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} onChange={(e) => setDescription(e.target.value)} placeholder="New Todo"/>

                <button>Add</button>
            </form>

            {
                openTodos.map((todo) => <TodoCard todo={todo} key={todo.id} deleteById={props.deleteById} updateTodo={props.updateTodo}/>)
            }
        </>
    )
}