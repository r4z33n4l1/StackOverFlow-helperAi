const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const defaultPrompt = { role: 'system', content: 'Just say hello' }


export default async function aiFetch(prompt: string) {
    const messages = [defaultPrompt, { role: 'user', content: prompt }];
  
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });
  
    const response = completion.data.choices[0].message.content;
    console.log(response);
    return response;
  }