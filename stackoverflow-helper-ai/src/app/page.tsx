'use client'
import { useState } from 'react';
import aiFetch from './utils/api';
import { linkValid, linkFetch } from './utils/linktools';

export default function Home() {
  const [link, setLink] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    const response = await aiFetch('Hello bestie!');
    console.log(response);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!linkValid(link)) {
      console.log('Invalid link');
      return;
    }

    setLoading(true);
    const bodyContent = await linkFetch(link);
    setLoading(false);

    const usePrompt = `My question is ${question}. Give me the answer from: ${bodyContent}`.replace(/ {2,}/g, '');
    console.log(usePrompt);
    const aiResponse = await aiFetch(usePrompt);
    setResponse(aiResponse);
  };

  return (
    <div>
      <h1>Hello guys! This is the start!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <br />
        <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {response && <p>{response}</p>}
    </div>
  );
}
