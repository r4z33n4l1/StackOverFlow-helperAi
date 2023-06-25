const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const defaultPrompt = { role: 'system', content: 'You are an amazing stackoverflow answerer, you shall analyze the prompt from the user and give a summary of their question based on the body of the text' }


export default async function aiFetch(prompt: string) {
    
    console.log(prompt);

    const messages = [defaultPrompt, { role: 'user', content: prompt }];

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,

    });
  
    const response = completion?.data.choices[0].message.content || 'No Response';
    console.log(response);
    return response;
  }