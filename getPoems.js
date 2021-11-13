const puppeteer = require('puppeteer');

const BASE_URL = 'https://stihi.ru'
const URL1 = 'https://stihi.ru/avtor/arpeiem';
const URL2 = 'https://stihi.ru/avtor/arpeiem&s=50';

module.exports.getPoems = async (callback) => {

  let page;
  let bs;
  let poems = [];
  let name;
  let text;
  let image;

  try {
    bs = await puppeteer.launch({headless: false});
    page = (await bs.pages())[0]

    await page.goto(`${URL1}`, {waitUntil: 'networkidle2'})

    const hrefs1 = await page.evaluate(
      () => Array.from(
        document.querySelectorAll('.poemlink'),
        a => a.getAttribute('href')
      )
    )

    await page.goto(`${URL2}`, {waitUntil: 'networkidle2'})

    const hrefs2 = await page.evaluate(
      () => Array.from(
        document.querySelectorAll('.poemlink'),
        a => a.getAttribute('href')
      )
    )

    const poem_links = [...hrefs1, ...hrefs2];

    for(let i = 0; i < 2; i++) {
      await page.goto(`${BASE_URL}/${poem_links[i]}`, {waitUntil: 'networkidle2'})

      name = await page.evaluate(
        () => document.querySelector('h1').innerText
      )

      text = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('.text'),
          br => br.innerText
        )
      )

      image = await page.evaluate(
        () => {
          return {
              imageUrl: `https://stihi.ru${document.querySelector('.authorsphoto')?.firstChild.getAttribute('src')}`,
              height: document.querySelector('.authorsphoto')?.firstChild.clientHeight,
              width: document.querySelector('.authorsphoto')?.firstChild.clientWidth,
            }
          }
      )

      poems.push({
        name,
        text,
        image
      })
    }
  } catch (error) {
    callback(error);
  }

  await bs.close()
  callback(null, poems)
}
