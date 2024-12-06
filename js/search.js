function search() {
  console.log("test")
  const elem = getElementById('sr');
  const words = elem.text.split(' ');
  const pollutionArray = ["pollution", "plastique", "plastiques", "accumulation", "toxique", "organes", "organe"]
  for (let i = 0; i < words.length; i++) {
    if(pollutionArray.indexOf(words[i].toLowerCase()) != -1) {
      const currentUrl = window.location.host;

      window.location.href = currentUrl+'/page_html/Pollution.html';
    }
  }
}
