import {Todo} from "../types/Todo.ts";
import {useNavigate} from "react-router-dom";

type TodoCardProps = {
    todo:Todo;
    deleteById: (id:string) => void
    updateTodo: (id:string | undefined, description:string, status:string) => void
}

export default function TodoCard(props:Readonly<TodoCardProps>){
    const navigate = useNavigate();

    function handleDetailButton(){
        navigate(`/${props.todo.id}`)
    }

    function deleteButton(){
        props.deleteById(props.todo.id)
    }

    function advancedButton(){
        let newStatus = ""

        if(props.todo.status === "OPEN") {
            newStatus = "IN_PROGRESS"
            props.updateTodo(props.todo.id, props.todo.description, newStatus)
            navigate(`/inprogress`)
        } else if (props.todo.status === "IN_PROGRESS"){
            newStatus = "DONE"
            props.updateTodo(props.todo.id, props.todo.description, newStatus)
            navigate(`/done`)
        }
    }

    return(
        <>
            <div>
                <div>
                    <h3>{props.todo.description}</h3>
                    <p>Status: {props.todo.status}</p>
                    <button onClick={handleDetailButton}>Details</button>
                    {props.todo.status === "DONE" ? (
                        <button disabled={true}>Advanced</button>
                    ) : (
                        <button onClick={advancedButton}>Advanced</button>
                    )}
                    <button onClick={deleteButton}>Del</button>
                </div>
            </div>
        </>
    )
}