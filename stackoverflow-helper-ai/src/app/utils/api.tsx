
//default open-ai code 
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// custom prompt which appropriately describes the task
const defaultPrompt = { role: 'system', content: 'You are an amazing stackoverflow answerer, you shall analyze the prompt from the user and answer their question appropriately from the prompt, as well as your past knowledge. The answer may involve code so return code if necessary in markdown. if the user asks a how to question you will give the appropriate code in the appropriate language.' }


export default async function aiFetch(prompt: string) {
    
    const messages = [defaultPrompt, { role: 'user', content: prompt }];

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,

    });
  
    const response = completion?.data.choices[0].message.content || 'No Response';
    // console.log(response);
    return response;
  }