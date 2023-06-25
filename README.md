# Stackoverflow Helper AI

This project is a simple web-app which uses AI to help developers quickly find an answer from a stackoverflow post.

## How to run
1) Clone the repo
2) Install the requirements ```npm i```
3) Run the server ```npm run dev```
4) Open the web-app in your browser ```http://localhost:3000```
5) Enjoy, hope it helps you!

## Usage 
1) Enter your question and link to the stackoverflow post (make sure it starts with ```https://stackoverflow.com/questions/```)
2) Click Submit
3) Wait for the AI to process the data


### project story
I was given the task to make an AI assisstant. That was a truly open-ended task, so it got my head spinning trying to think of
what I could possibly do, which hasn't been done yet. I also haven't had much experience with developing AI, so I had to do some research.

I tried implementing base codes from Open-AI trying to get it to run and figure out the basics.
This was a very time consuming process, as I had to learn how to use the API, and how to use the AI itself, as well as get more experienced with Typesript and Next Js. I somehow always ended up in Stackover flow, where, 
I had to skim through, see if an answer is valid, try it, if not, go back and try another one. This was a very time consuming process, and I thought to myself,
"I wish this was faster."
and that is when it hit me, oh, "you know what, I will make it faster". So I did.


### Trade offs
As it was an impromptu project and I only set myself around 1-2 hours to make it, I had to make some trade offs.

1) The script for the prompt was on the fly, definitely need to spend more time fine tuning it
2) The U.I. is very basic, will need to make it nicer, and more user friendly
3) There is no function for the user to input their own api key, hence it is not deployable at the moment
4) The response structure of the AI can be improved, especially by making use of nice markdown formatting 
5) I wanted to add a crawler / auto - searcher function but didnt have time
    a) This would be where you just give the question, the AI will create appropriate search terms and search stack overflow, and feed it's response back to itself
        and give a final proper answer
