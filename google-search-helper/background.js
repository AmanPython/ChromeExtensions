chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "searchGoogle") {
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        function: performSearch,
        args: [request.query]
      }, () => {
        sendResponse({status: "done"});
      });
      return true; // Keeps the messaging channel open for sendResponse
    } else if (request.action === "getResults") {
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        function: getSearchResults
      }, (results) => {
        sendResponse(results[0].result);
      });
      return true; // Keeps the messaging channel open for sendResponse
    }
  });
  
  function performSearch(query) {
    document.querySelector('textarea[name="q"]').value = query;
    document.querySelector('input[name="btnK"]').click();
  }
  
  function getSearchResults() {
    const searchResults = Array.from(document.querySelectorAll('.yuRUbf a')).map(anchor => ({
      title: anchor.querySelector('h3') ? anchor.querySelector('h3').innerText : '',
      link: anchor.href
    }));
    return searchResults;
  }
  