import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
            <div>
                <Link to={"/"}> Open |</Link>
                <Link to={"/inprogress"}> In Progress |</Link>
                <Link to={"/done"}> Done </Link>
            </div>
        </>
    )
}