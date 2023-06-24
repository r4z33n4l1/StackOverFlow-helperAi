'use client'
import { useState } from 'react';
import aiFetch from './utils/api';

export default function Home() {

  const [link, setLink] = useState('');
  const [question, setQuestion] = useState('');

  const handleClick = async () => {
    const response = await aiFetch('Hello bestie!');
    console.log(response);
  };

  return (
    <div>
      <h1>Hello guys! This is the start!</h1>
      <form>
        <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <br />
        <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleClick}>Click me!</button>
      </form>
    </div>
  );
}