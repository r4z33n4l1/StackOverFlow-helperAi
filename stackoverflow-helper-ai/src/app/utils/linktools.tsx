

export function linkValid(link: string): boolean {

    return link.startsWith("https://stackoverflow.com/questions/");

  }
  

  export async function linkFetch(url: string) {
    const response = await fetch(url);
    const htmlText = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const contentElement = doc.querySelector('#answers');

    let bodyContent = '';
    if (contentElement) {
        const answerElements = contentElement.querySelectorAll('.js-post-body');
        answerElements.forEach((answerElement) => {
            bodyContent += answerElement.textContent?.replace(/ {2,}/g, '') || '';
        });
    }

    console.log(bodyContent);
    return bodyContent;
}