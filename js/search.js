function search() {
  console.log("test")
  const elem = window.document.getElementById('sr');
  const words = elem.value.split(' ');
  const pollutionArray = ["pollution", "plastique", "plastiques", "accumulation", "toxique", "organes", "organe"]
  for (let i = 0; i < words.length; i++) {
    if(pollutionArray.indexOf(words[i].toLowerCase()) != -1) {
      //const currentUrl = window.location.host;
      //console.log(currentUrl)
      window.location.href = '/page_html/Pollution.html';
    }
  }

  const planctonArray = ["plancton", "océanique", "oceanique", "poumon", "poumons", "pulmonaire", "phytoplancton"]
  for (let i = 0; i < words.length; i++) {
    if(planctonArray.indexOf(words[i].toLowerCase()) != -1) {
      //const currentUrl = window.location.host;
      //console.log(currentUrl)
      window.location.href = '/page_html/Plancton.html';
    }
  }

  const mareeArray = ["marée", "maree", "muscle", "atrophie"]
  for (let i = 0; i < words.length; i++) {
    if(mareeArray.indexOf(words[i].toLowerCase()) != -1) {
      //const currentUrl = window.location.host;
      //console.log(currentUrl)
      window.location.href = '/page_html/Muscle_Maree.html';
    }
  }

  const digestArray = ["digestif", "décomposeur", "decomposeur", "digestion"]
  for (let i = 0; i < words.length; i++) {
    if(digestArray.indexOf(words[i].toLowerCase()) != -1) {
      //const currentUrl = window.location.host;
      //console.log(currentUrl)
      window.location.href = '/page_html/Pollution.html';
    }
  }
}
