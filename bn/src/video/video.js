const { Deepgram } = require('@deepgram/sdk');
const fs = require('fs');

// The API key you created in step 1
const deepgramApiKey = '476b46e3dcaf4f81bde74b8a3bc8fff7ecad9716';

// Replace with your file path and audio mimetype
const fileSource = {
  stream: fs.createReadStream('./How.mp4'),
  mimetype: 'video/mp4',
};
const pathToFile = 'How.mp4';
const mimetype = 'video/mp4';
// Initializes the Deepgram SDK
const deepgram = new Deepgram('476b46e3dcaf4f81bde74b8a3bc8fff7ecad9716');
deepgram.transcription
  .preRecorded(fileSource, {
    punctuate: true,
    utterances: true,
  })
  .then((result) => {
    fs.writeFileSync('captions-en.vtt', result.toWebVTT());
  });

deepgram.transcription
  .preRecorded(
    { buffer: fs.readFileSync(pathToFile), mimetype },
    { punctuate: true, language: 'en', model: 'general-enhanced' },
  )
  .then((transcription) => {
    console.dir(transcription, { depth: null });
  })
  .catch((err) => {
    console.log(err);
  });
