const form = document.getElementById("form")
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const citation = document.getElementById("citations").value;
  const author = document.getElementById("nom").value;
  addQuote(citation, author);
  // console.log(citation);
  // console.log(author);
  form.reset();
});
let counter=0;
function addQuote(quotes, authors) {
  const quoteText = document.createElement("p");
  quoteText.className = "text";
  quoteText.textContent = quotes;
  
  const quoteAuthor = document.createElement("p");
  quoteAuthor.className = "author";
  quoteAuthor.textContent = authors;
  
  const quoteDiv = document.createElement("div");
  quoteDiv.className = "quote";
  quoteDiv.appendChild(quoteText);
  quoteDiv.appendChild(quoteAuthor);
  
  const quoteList = document.getElementById("quote-list");
  quoteList.appendChild(quoteDiv);
  
  counter ++;
  updateCitationCount()
};
function updateCitationCount() {
  const title = document.getElementById("citation-count");
  title.textContent = counter + (counter <= 1 ? " citation" : " citations");
}
