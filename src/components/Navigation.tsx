import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
            <div>
                <Link to={"/view"}> ViewPage </Link>
            </div>
        </>
    )
}