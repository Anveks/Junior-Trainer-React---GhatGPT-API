import QuestionModel from "../Models/QuestionModel";
import appConfig from "../Utils/AppConfig";
import axios from "axios";

class GPTService {

  public apiKey = appConfig.API_KEY; // API key:
  
  async getCompletion(prompt: any): Promise<any> {

    const body = { // Request body:
      prompt, // the prompt
      model: "text-davinci-003", // GPT algorithm
      max_tokens: 2500, // max completion tokens
    };

    // fetch the data:
    const response = await axios.post(appConfig.GPT_URL, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + this.apiKey,
      },
    });

    // extract the completion as a string:
    const completion = response.data.choices[0].text;

    console.log(completion);
    
    // convert the completion string to a valid JSON format:
    const questions: QuestionModel[] = JSON.parse(completion.replace(/'/g, '"'));

    return questions;
  }

  
}

const chatGPTService = new GPTService();

export default chatGPTService;