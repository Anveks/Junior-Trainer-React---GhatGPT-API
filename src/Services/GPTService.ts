import QuestionModel from "../Models/QuestionModel";
import appConfig from "../Utils/AppConfig";
import axios from "axios";

class GPTService {

  async getCompletion(prompt: any): Promise<QuestionModel[]>{

    // API key:
    const apiKey = appConfig.API_KEY;
  
    // request body:
    const body = {
      prompt, // the prompt
      model: "text-davinci-003", // GhatGPT algorithm
      max_tokens: 2500 // max completion tokens
    };

    const response = await axios.post(appConfig.GPT_URL, body, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + apiKey
      }
    });

    // extract the completion:
    const completion = response.data.choices[0].text;
  
    // return completion:
    return completion;
  };
  
}

const chatGPTService = new GPTService();

export default chatGPTService;