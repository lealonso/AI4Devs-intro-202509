// Reverse a string safely (Unicode-aware)
function reverseString(str) {
  return Array.from(str).reverse().join("");
}

const input = document.getElementById("text-input");
const button = document.getElementById("reverse-btn");
const form = document.getElementById("reverse-form");
const resultWrap = document.getElementById("result-wrap");
const resultText = document.getElementById("result-text");

// Show/hide button depending on input length
input.addEventListener("input", () => {
  if (input.value.trim().length >= 3) {
    button.classList.remove("d-none");
  } else {
    button.classList.add("d-none");
    // also hide previous result if user clears back below 3 chars
    resultWrap.classList.add("d-none");
    resultText.textContent = "";
  }
});

// Handle click (form submit)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const reversed = reverseString(value);
  resultText.textContent = reversed;
  resultWrap.classList.remove("d-none");
});
