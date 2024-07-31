document.getElementById('open-google').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://www.google.co.in' });
  });
  
  document.getElementById('search-google').addEventListener('click', () => {
    const searchWord = document.getElementById('search-word').value;
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0].id;
  
      chrome.scripting.executeScript({
        target: {tabId: activeTab},
        func: performSearch,
        args: [searchWord]
      }, () => {
        setTimeout(() => {
          chrome.runtime.sendMessage({ action: "getResults" }, (response) => {
            if (response) {
              displayResults(response);
            }
          });
        }, 3000); // Wait for the search results to load
      });
    });
  });
  
  function performSearch(query) {
    const searchInput = document.querySelector('textarea[name="q"]');
    const searchButton = document.querySelector('input[name="btnK"]');
    
    if (searchInput && searchButton) {
      searchInput.value = query;
      searchButton.click();
    }
  }
  
  function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    results.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('result');
  
      const title = document.createElement('a');
      title.href = result.link;
      title.target = '_blank';
      title.innerText = result.title;
  
      resultDiv.appendChild(title);
      resultsDiv.appendChild(resultDiv);
    });
  }
  