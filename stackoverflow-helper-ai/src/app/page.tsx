'use client'

// appropriate imports
import { useState } from 'react';
import aiFetch from './utils/api';
import { linkValid, linkFetch } from './utils/linktools';

export default function Home() {

  // declare variables as required
  const [link, setLink] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  // function which takes care of submission 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // see if link is valid
    if (!linkValid(link)) {
      alert('Invalid link');
      return;
    }
    
    // enter loading state
    setResponse('');
    setLoading(true);

    //parse link and send prompt to ai and get it back
    const bodyContent = await linkFetch(link);
    const usePrompt = `My question is ${question}. Give me the answer from: ${bodyContent}`.replace(/ {2,}/g, '');
    const aiResponse = await aiFetch(usePrompt);

    // exit loading state and set response
    setLoading(false);
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