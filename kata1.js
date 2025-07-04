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