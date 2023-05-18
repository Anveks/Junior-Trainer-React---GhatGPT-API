import { Navigate, Route, Routes } from "react-router-dom";
import Exercises from "../Exercises/Exercises";
import Quiz from "../Quiz/Quiz";
import Tests from "../Tests/Tests";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path="/" element={<Navigate to="/quiz" replace />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/tests" element={<Tests />} />
            </Routes>
        </div>
    );
}

export default Router;
