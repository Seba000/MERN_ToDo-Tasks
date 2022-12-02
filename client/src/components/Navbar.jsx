import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
        <h1>MERN ToDo Tasks App</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Create Task</Link>
            </li>
        </ul>
    </div>
  )
}
