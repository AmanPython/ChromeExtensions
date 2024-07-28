// JavaScript code

// Flag to ensure the code runs only once
let isJobSearchInitialized = false;

if (!isJobSearchInitialized) {
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
            isJobSearchInitialized = true; // Update the flag
        }
    }
}

// Function to click on each job element and wait for 5 seconds
function clickJobElements() {
  // Select all job elements
  debugger
  const jobElements = document.querySelectorAll('.job_seen_beacon .jcs-JobTitle');

  // Define a function to click on a job element and wait for 5 seconds
  function clickAndWait(index) {
    if (index < jobElements.length) {
      jobElements[index+5].click();
      console.log(`Clicked on job element ${index + 1}`);
      // Wait for 5 seconds before clicking the next element
      debugger
      // setTimeout(() => {
      //   clickAndWait(index + 1);
      // }, 5000);
    } else {
      console.log('Finished clicking all job elements.');
    }
  }

  // Start the process by clicking the first job element
  clickAndWait(0);
}

// Execute the function to start the process
clickJobElements();


const article = document.querySelector('article');

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  debugger
  const text = article.textContent;
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  (date ?? heading).insertAdjacentElement('afterend', badge);
}