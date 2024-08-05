document.getElementById('generate-quote').addEventListener('click', async () => {
  const randomIndex = Math.floor(Math.random() * 3);
  let quoteData;

  switch (randomIndex) {
      case 0:
          quoteData = await fetch('https://catfact.ninja/fact').then(res => res.json());
          document.getElementById('quote-display').textContent = quoteData.fact;
          document.getElementById('source-display').textContent = 'Source: Cat Facts API';
          break;
      case 1:
          quoteData = await fetch('https://official-joke-api.appspot.com/jokes/programming/random').then(res => res.json());
          document.getElementById('quote-display').textContent = quoteData[0].setup + " - " + quoteData[0].punchline;
          document.getElementById('source-display').textContent = 'Source: Programming Jokes API';
          break;
      case 2:
          quoteData = await fetch('https://api.quotable.io/random').then(res => res.json());
          document.getElementById('quote-display').textContent = '"' + quoteData.content + '"';
          document.getElementById('source-display').textContent = 'Source: Inspirational Quotes API';
          break;
  }
});
