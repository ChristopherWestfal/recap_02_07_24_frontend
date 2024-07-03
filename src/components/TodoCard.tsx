import {Todo} from "../types/Todo.ts";
import {useNavigate} from "react-router-dom";

type TodoCardProps = {
    todo:Todo;
}

export default function TodoCard(props:Readonly<TodoCardProps>){
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/${props.todo.id}`)
    }

    function secondButton(){
        if(props.todo.status === "OPEN") {
            <p>Hallo</p>
        } else if (props.todo.status === "IN_PROGRESS"){
            <p>Hallo</p>
        } else {
            <p>Hallo</p>
        }

    }

    return(
        <>
            <div>
                <div>
                    <h3>{props.todo.description}</h3>
                    <p>Status: {props.todo.status}</p>
                    <button onClick={handleClick}>Details</button>
                    {props.todo.status === "DONE" ? (
                        <button onClick={secondButton}>Delete</button>
                    ) : (
                        <button onClick={secondButton}>Advanced</button>
                    )}
                </div>
            </div>
        </>
    )
}