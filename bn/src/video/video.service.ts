import { Injectable } from '@nestjs/common';
import { Deepgram } from '@deepgram/sdk';
import * as fs from 'fs';

@Injectable()
export class VideoService {
  // Read file  in folder
  public async gebVTT(filename) {
    //123.mp4
    const fileSource = {
      stream: fs.createReadStream('upload/' + filename),
      mimetype: 'video/mp4',
    };
    const mimetype = 'video/mp4';
    const deepgram = new Deepgram('e8b989401ffa6047500e062146542dc60c7f2b1a');
    deepgram.transcription
      .preRecorded(fileSource, {
        punctuate: true,
        utterances: true,
      })
      .then((result) => {
        fs.writeFileSync(filename + '.vtt', result.toWebVTT());
      });
    // deepgram.transcription
    //   .preRecorded(
    //     { buffer: fs.readFileSync('upload/' + filename), mimetype },
    //     { punctuate: true, language: 'en', model: 'general-enhanced' },
    //   )
    //   .then((transcription) => {
    //     console.dir(transcription, { depth: null });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //send database
  }
}
