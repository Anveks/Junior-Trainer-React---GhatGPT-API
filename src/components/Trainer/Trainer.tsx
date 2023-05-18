import { NavLink } from "react-router-dom";
import Router from "../Router/Router";
import "./Trainer.css";

function Trainer(): JSX.Element {
    return (
        <div className="trainer">
            <h2>Junoir Trainer</h2>

            <div className="menu">
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/exercises">Exercises</NavLink>
                <NavLink to="/tests">Tests</NavLink>
            </div>
            <hr />
            <div>
                <Router />
            </div>

        </div>
    );
}

export default Trainer;
