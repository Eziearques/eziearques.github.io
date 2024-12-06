function search() {
  console.log("test")
  const elem = window.document.getElementById('sr');
  const words = elem.value.split(' ');
  const pollutionArray = ["pollution", "plastique", "plastiques", "accumulation", "toxique", "organes", "organe"]
  for (let i = 0; i < words.length; i++) {
    if(pollutionArray.indexOf(words[i].toLowerCase()) != -1) {
      const currentUrl = window.location.host;
      console.log(currentUrl)
      window.location.href = currentUrl+'/page_html/Pollution.html';
    }
  }
}
