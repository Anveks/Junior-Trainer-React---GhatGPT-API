import { useState } from "react";
import "./Quiz.css";
import chatGPTService from "../../Services/GPTService";
import QuestionModel from "../../Models/QuestionModel";

function Quiz(): JSX.Element {
    const [formData, setFormData] = useState({
        language: "",
        difficulty: "",
        questionsNum: 0,
    });

    const [questions, setQuestions] = useState<QuestionModel[]>([]);

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    function handleChange(e: any) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function generate(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        const prompt = `Write ${formData.questionsNum} job interview questions for ${formData.language} programming language. Each question should be suitable for ${formData.difficulty} level of programming. Add an answer. Return the data as a valid JSON where each object has questionId, question, answer.`;

        const generatedQuestions = await chatGPTService.getCompletion(prompt.trim());

        console.log(generatedQuestions);

        setQuestions(generatedQuestions);
    }

    return (
        <div className="Quiz">
            <form onSubmit={generate}>
                <label>Enter programming language:</label>
                <input type="text" name="language" onChange={handleChange} required />
                <br />
                <br />

                <label>Enter difficulty level:</label>
                <select name="difficulty" onChange={handleChange} required>
                    <option>Beginner</option>
                    <option>Medium</option>
                    <option>Expert</option>
                </select>
                <br />
                <br />

                <label>Enter number of questions:</label>
                <input type="number" name="questionsNum" onChange={handleChange} required />

                <button type="submit">Generate</button>
            </form>

            <div className="questions">
                {questions.length !== 0 ? (
                    <ul>
                        {questions.map((q) => (
                            <li key={q.questionId} onClick={() => setSelectedQuestion(q.questionId)}>
                                {q.question}
                                {selectedQuestion === q.questionId && (
                                    <div>{q.answer}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>The questions will be displayed here...</p>
                )}
            </div>
        </div>
    );
}

export default Quiz;
