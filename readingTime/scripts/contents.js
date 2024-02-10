const article = document.querySelector("article");
if(article) {
    const text = article.textContent;
    const wordMatchExpression = /[^\s]+/g; //Regular expression to select the words by not counting the spaces
    const words = text.matchAll(wordMatchExpression);
    //matchAll returns an iterator. Convert it to an array to get the word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200); // assuming reading speed of 200 wpm
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    if (date || heading) {
        (date ?? heading).insertAdjacentElement("afterend", badge);
      }      
}