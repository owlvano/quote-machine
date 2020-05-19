const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeQuotes() {
  const pages = 10;

  let urls = [];
  for (let i = 1; i <= pages; i++) {
    urls.push(i);
  }
  urls = Array.from(urls, (page) => `http://quotes.toscrape.com/page/${page}`);

  console.log("Scraping quotes...");
  const requests = urls.map(async (url) => {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const quotes = $(".quote")
      .toArray()
      .map((element) => ({
        text: $(element).find(".text").first().text(),
        author: $(element).find(".author").first().text(),
      }));
    return quotes;
  });

  const quotes = await Promise.all(requests);
  const jsonContent = JSON.stringify(quotes.reduce((a, b) => [...a, ...b]));

  fs.writeFile("tools/quotes.json", jsonContent, (err) => {
    if (err) throw err;
    console.log("Quotes JSON successfully saved!");
  });
}

scrapeQuotes();
