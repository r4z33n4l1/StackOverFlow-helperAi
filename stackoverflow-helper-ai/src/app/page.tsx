'use client'
import { useState } from 'react';
import aiFetch from './utils/api';
import { linkValid, linkFetch } from './utils/linktools';

export default function Home() {
  const [link, setLink] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!linkValid(link)) {
      alert('Invalid link');
      return;
    }

    setLoading(true);
    const bodyContent = await linkFetch(link);
    setLoading(false);

    const usePrompt = `My question is ${question}. Give me the answer from: ${bodyContent}`.replace(/ {2,}/g, '');
    // console.log(usePrompt);

    const aiResponse = await aiFetch(usePrompt);
    setResponse(aiResponse);
  };

return (
  <div className="container">
    <h1 className="title">Stackoverflow Helper AI</h1>
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form-input" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
      <br />
      <input type="text" className="form-input" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button type="submit" className="form-button">Submit</button>
    </form>
    {loading && <p className="loading">Loading...</p>}
    {response && <p className="response">{response}</p>}
  </div>
);

}