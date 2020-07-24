/* eslint-disable require-jsdoc */
const fs = require('fs');
const imageSplitter = require('./lib/imageSplitter.js');

(async () => {
  try {
    const chunckSize = 1000;
    const chuncks = await imageSplitter.imageToChunks('imgs/test.png', chunckSize);
    console.log('Number of chunks', chuncks.length);

    console.log(chuncks);
    const actions = [];
    let i = 0;
    chuncks.forEach(c => {
      i++;
      actions.push(fs.writeFileSync(`imgs/slice_${i}.png`, c));
    });
    return await Promise.all(actions);
  } catch (e) {
    console.log(e);
  }
})();