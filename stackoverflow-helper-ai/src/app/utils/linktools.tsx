

export function linkValid(link: string): boolean {

    return link.startsWith("https://stackoverflow.com/questions/");

  }
  

export async function linkFetch(url: string) {
    
    const response = await fetch(url);
    const htmlText = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const contentElement = doc.querySelector('#content');

    let bodyContent = '';
    if (contentElement) {
        bodyContent = contentElement.textContent?.replace(/ {2,}/g, '') || '';
    }

    console.log(bodyContent);
    return bodyContent;

    }
