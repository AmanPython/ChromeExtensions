const article = document.querySelector("article")

// 'document.querySelector' may return null if rthe selector doesn't match anything
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount/200);
    const badge = document.createElement("p");
    // Use the same styling as the poublish information in an article's
    badge.classList.add("color-secondary-text","type--caption");
    badge.textContent =`⏱️ ${readingTime} min read`

    // Support for API reference docs
    const heading = article.querySelector("h1")
    // Support for Article docs with date
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend",badge);
}

if (!article){
    console.log("Article element not found")
}