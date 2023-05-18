import { useEffect, useState } from "react";
import "./Exercises.css";
import chatGPTService from "../../Services/GPTService";

function Exercises(): JSX.Element {

    const [exercise, setExersise] = useState<string>();

    const prompt = `Get me a JavaScript exercise for a beginner.`;

    useEffect(() => {
        chatGPTService.getCompletion(prompt)
            .then((res) => { setExersise(res) })
            .catch((err) => console.log(err));
    }, []);

    console.log(exercise);

    return (
        <div className="Exercises">
        </div>
    );
}

export default Exercises;
