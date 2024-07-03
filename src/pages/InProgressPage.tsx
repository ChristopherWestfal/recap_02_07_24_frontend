import {Todo} from "../types/Todo.ts";
import {FormEvent, useState} from "react";
import TodoCard from "../components/TodoCard.tsx";

type InProgressPageProps = {
    todos:Todo[];
    addTodo: (description:string) => void
    deleteById: (id:string) => void
    updateTodo: (id:string | undefined, description:string, status:string) => void
}

export default function InProgressPage(props:Readonly<InProgressPageProps>){

    const inProgressTodos = props.todos.filter(todo => todo.status === "IN_PROGRESS");
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
                inProgressTodos.map((todo) => <TodoCard todo={todo} key={todo.id} deleteById={props.deleteById} updateTodo={props.updateTodo}/>)
            }
        </>
    )
}