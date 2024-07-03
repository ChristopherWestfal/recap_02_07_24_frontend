import {Todo} from "../types/Todo.ts";
import TodoCard from "./TodoCard.tsx";

type TodoViewProps = {
    todos:Todo[];
}

export default function TodoView(props:Readonly<TodoViewProps>){
    const cards = props.todos.map((todo) => <TodoCard key={todo.id} todo={todo}/>);

    return(
        <div>
            {cards}
        </div>
    )
}