import {Todo} from "../types/Todo.ts";
import {FormEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

type DetailPageProps = {
    todo:Todo;
    updateTodo: (id:string | undefined, description:string, status:string) => void
    getById: (id:string) => void
}

export default function DetailPage(props:Readonly<DetailPageProps>){

    const navigate = useNavigate();
    const params = useParams();
    const[description, setDescription] = useState(props.todo.description);
    const[status, setStatus] = useState(props.todo.status);


    function handleCancle(){
        navigate('/');
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (params.id) {
            props.updateTodo(params.id, description, status)
            navigate('/');
        }
    }

    useEffect(() => {
        if (params.id)
            props.getById(params.id)
    }, []);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value={"OPEN"}>Open</option>
                        <option value={"IN_PROGRESS"}>In Progress</option>
                        <option value={"DONE"}>Done</option>
                    </select>
                </label>
                <button>save</button>
                <button onClick={handleCancle}>cancle</button>
            </form>

        </>
    )
}