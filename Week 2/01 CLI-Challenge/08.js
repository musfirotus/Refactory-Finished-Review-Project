// Code by Musfirotus Sa'adah
const { program } = require("@caporal/core");
const axios = require('axios');
const cheerio = require('cheerio');

program.version("1.0.0").description("");

program
    // Get Headlines
    .command("headlines", "Get Headlines")
    .action(async () => {
        const html = await axios.get('https://indeks.kompas.com/headline/?site=all&date=2020-07-26');
            const $ = await cheerio.load(html.data);
            let data = [];
          
            $('.article__link').each((i, elem) => {
                data.push({
                  title: $(elem).text(),
                  link: $(elem).attr('href')
                })
            });
          
            console.log(data);
    })

program.run();

// How to run in my Windows 10 :
// node 08.js headlines
// [
//   {
//     title: 'UPDATE: Total Ada 98.778 Kasus Covid-19 di Indonesia, Bertambah 1.492',  
//     link: 'https://nasional.kompas.com/read/2020/07/26/15202971/update-total-ada-98778-kasus-covid-19-di-indonesia-bertambah-1492'
//   },
//   {
//     title: 'Hasil MotoGP 2020: Quartararo Tak Tersentuh, Rossi Vinales Habis-habisan',
//     link: 'https://otomotif.kompas.com/read/2020/07/26/194154715/hasil-motogp-2020-quartararo-tak-tersentuh-rossi-vinales-habis-habisan'
//   },
//   {...}
// ]