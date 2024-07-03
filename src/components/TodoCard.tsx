import {Todo} from "../types/Todo.ts";

type TodoCardProps = {
    todo:Todo;
}

export default function TodoCard(props:Readonly<TodoCardProps>){
    return(
        <>
            <div>
                <div>
                    <h3>{props.todo.description}</h3>
                    <p>Status: {props.todo.status}</p>
                </div>
            </div>
        </>
    )
}