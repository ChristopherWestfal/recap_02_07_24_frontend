import {Todo} from "../types/Todo.ts";
import {FormEvent, useEffect, useState} from "react";
import TodoCard from "../components/TodoCard.tsx";

type ViewPageProps = {
    todos:Todo[];
    addTodo: (description:string) => void
}

export default function ViewPage(props:Readonly<ViewPageProps>){

    const[description, setDescription] = useState("");

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        props.addTodo(description);

    }

    useEffect(() => {
        console.log(props.todos)
    }, [])

    return(
        <>
            <h1>Hallo</h1>

            <form onSubmit={handleSubmit}>
                <input type={"text"} onChange={(e) => setDescription(e.target.value)} placeholder="New Todo"/>

                <button>Add</button>
            </form>

            {
                props.todos.map((todo) => <TodoCard todo={todo} key={todo.id}/>)
            }
        </>
    )
}