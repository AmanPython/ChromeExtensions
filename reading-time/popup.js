document.getElementById('find-jobs').addEventListener('click', () => {
    debugger
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: findJobs
      });
    });
  });
  
  document.getElementById('next-job').addEventListener('click', () => {
    debugger
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickNextJob
      });
    });
  });
  
  function findJobs() {
    // This function will be executed in the context of the current tab
    const jobTitleInput = document.getElementById("text-input-what");
    const cityInput = document.getElementById("text-input-where");
    const findJobsButton = document.querySelector(".yosegi-InlineWhatWhere-primaryButton");
    debugger
    // Fill in the job title and city
    if (jobTitleInput && cityInput && findJobsButton) {
      jobTitleInput.value = "python software developer";
      cityInput.value = "Bengaluru, Karnataka";
  
      // Check if both fields are filled
      if (jobTitleInput.value && cityInput.value) {
        findJobsButton.click();
      }
    }
  }
  
  let currentIndex = 0;
  
  function clickNextJob() {
    // This function will be executed in the context of the current tab
    debugger
    const jobElements = document.querySelectorAll('.job_seen_beacon .jcs-JobTitle');
    if (currentIndex < jobElements.length) {
      jobElements[currentIndex].click();
      currentIndex++;
      console.log(`Clicked on job element ${currentIndex}`);
    } else {
      console.log('No more job elements to click.');
    }
  }
  