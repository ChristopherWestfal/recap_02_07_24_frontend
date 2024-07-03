import {Todo} from "../types/Todo.ts";

export default function DetailPage(){

    type DetailPageProps = {
        todos:Todo;
        addTodo: (id:string, description:string, status:string) => void
    }

    return(
        <>

        </>
    )
}