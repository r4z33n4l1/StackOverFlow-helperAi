
// function which checks if the link is a valid stackoverflow- question link
export function linkValid(link: string): boolean {

    return link.startsWith("https://stackoverflow.com/questions/");

  }
  
// url conten parser function
  export async function linkFetch(url: string) {

    //fetch the url
    const response = await fetch(url);
    const htmlText = await response.text();

    //extract the body content
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const contentElement = doc.querySelector('#answers');

    let bodyContent = '';
    if (contentElement) {

        // get only the answer content
        const answerElements = contentElement.querySelectorAll('.js-post-body');
        answerElements.forEach((answerElement) => {
            bodyContent += answerElement.textContent?.replace(/ {2,}/g, '') || '';
        });
    }

    // console.log(bodyContent);
    return bodyContent;
}