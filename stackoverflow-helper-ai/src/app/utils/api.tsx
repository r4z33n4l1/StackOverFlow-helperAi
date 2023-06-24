const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const defaultPrompt = { role: 'system', content: 'You are a stackoverflow analyzer. Provide a link and a question, and I will find the most accurate answer based on the contents of the link.' }

export default function AiFetch({ prompt = defaultPrompt, response }) {

    return response

}
