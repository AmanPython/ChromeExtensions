chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "performSearch") {
      document.querySelector('textarea[name="q"]').value = request.query;
      document.querySelector('input[name="btnK"]').click();
    } else if (request.action === "getResults") {
      const searchResults = Array.from(document.querySelectorAll('.yuRUbf a')).map(anchor => ({
        title: anchor.querySelector('h3') ? anchor.querySelector('h3').innerText : '',
        link: anchor.href
      }));
      sendResponse(searchResults);
    }
  });
  