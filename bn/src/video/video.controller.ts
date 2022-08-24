import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { VideoService } from './video.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('video', {
      storage: diskStorage({
        destination: 'upload',
        filename: (req, file, cb) => {
          // const fileName = file.originalname;
          // cb(null, fileName);
          const myuuid = uuidv4();
          // console.log(file.filename + myuuid);
          cb(null, myuuid + '.mp4');
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('check file:', file.filename);
    console.log('check originalname:', file.originalname);

    this.videoService.gebVTT(file.filename);
  }
}
